import { NextRequest, NextResponse } from 'next/server'
import { commercialFormSchema, type CommercialFormData } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const result = commercialFormSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const data: CommercialFormData = result.data

    // Log the submission (in production, this would go to a CRM webhook)
    console.log('Commercial inquiry received:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      company: data.companyName,
      platform: data.platform,
      timestamp: new Date().toISOString(),
    })

    // In production, send to CRM webhook
    // Example: HubSpot, Salesforce, or custom CRM
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL
    
    if (crmWebhookUrl) {
      try {
        await fetch(crmWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'commercial_inquiry',
            source: 'vblx-website',
            data: {
              ...data,
              submittedAt: new Date().toISOString(),
            },
          }),
        })
      } catch (webhookError) {
        // Log but don't fail the request if webhook fails
        console.error('CRM webhook error:', webhookError)
      }
    }

    // In production, you might also:
    // - Send confirmation email to the user
    // - Create a lead in the database
    // - Trigger workflow automation

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      leadId: `COM-${Date.now()}`, // Placeholder lead ID
    })

  } catch (error) {
    console.error('Commercial form submission error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
