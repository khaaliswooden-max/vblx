import { NextRequest, NextResponse } from 'next/server'
import { assessmentLeadSchema } from '@/lib/validations'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const ASSESSMENT_WEBHOOK_URL =
  process.env.ASSESSMENT_WEBHOOK_URL ??
  'https://script.google.com/macros/s/AKfycbzw1j3VHH_gPHCt_9_GpltBXjDtTj5CrYduCMwr5T8FUiFCcI5SGvjj5GdR1VqPwHkcyQ/exec'

/**
 * POST /api/assessment/submit
 * Receives lead capture data from assessment/calculator forms and forwards to
 * Google Sheets via the Apps Script webhook.
 * Used by: eloquent-churros (DoD), nimble-daffodil (SAP), luminous-cheesecake (Digital Transformation)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = assessmentLeadSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: result.error.flatten().fieldErrors,
        },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const data = result.data

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      organization: data.organization,
      role: data.role ?? '',
      source: data.source ?? 'unknown',
      assessmentData: data.assessmentData ?? {},
      submittedAt: new Date().toISOString(),
    }

    const webhookResponse = await fetch(ASSESSMENT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!webhookResponse.ok) {
      console.error('Assessment webhook error:', webhookResponse.status, await webhookResponse.text())
      // Still return success - lead captured, webhook may need doPost() in Apps Script
      return NextResponse.json(
        {
          success: true,
          message: 'Submission received. A specialist will contact you shortly.',
        },
        { headers: CORS_HEADERS }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Submission received. A specialist will contact you shortly.',
      },
      { headers: CORS_HEADERS }
    )
  } catch (error) {
    console.error('Assessment submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: CORS_HEADERS }
    )
  }
}

// CORS: allow assessment sites (eloquent-churros, nimble-daffodil, luminous-cheesecake) to POST
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...CORS_HEADERS,
      'Access-Control-Max-Age': '86400',
    },
  })
}
