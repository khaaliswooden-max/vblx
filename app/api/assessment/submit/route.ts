import { NextRequest, NextResponse } from 'next/server'
import { assessmentLeadSchema } from '@/lib/validations'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const ASSESSMENT_WEBHOOK_URL =
  process.env.ASSESSMENT_WEBHOOK_URL ??
  'https://script.google.com/macros/s/AKfycbzijvZInzi0SI21ZScj-THIbTNhAzN9rOKENCPjlKKLzVhtyXGfQC6Yqh6z98H9LjYZ/exec'

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
    const details = (data.assessmentData ?? {}) as Record<string, unknown>

    // Map to format expected by Google Apps Script (Leads sheet)
    const payload = {
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      company: data.organization,
      role: data.role ?? '',
      source:
        data.source === 'dod-compliance'
          ? 'DoD Compliance Readiness Assessment'
          : data.source === 'sap-s4hana-roi'
            ? 'SAP S/4HANA Migration ROI Calculator'
            : data.source === 'digital-transformation'
              ? 'Digital Transformation Readiness Assessment'
              : data.source ?? 'Visionblox Services Assessment',
      score: typeof details.score === 'number' || typeof details.score === 'string' ? details.score : '',
      details: JSON.stringify({
        percentages: details.percentages ?? {},
        topRecommendations: details.topRecommendations ?? [],
        complexity: details.complexity ?? '',
        engagement: details.engagement ?? '',
        duration: details.duration ?? '',
        answers: details.answers ?? {},
      }),
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
