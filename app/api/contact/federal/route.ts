import { NextRequest, NextResponse } from 'next/server'
import { federalFormSchema, type FederalFormData } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const result = federalFormSchema.safeParse(body)
    
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

    const data: FederalFormData = result.data

    // Log the submission (in production, this would go to BD Command Center)
    console.log('Federal/SLED inquiry received:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      organization: data.organizationName,
      organizationType: data.organizationType,
      productInterest: data.productInterest,
      contractVehicle: data.contractVehicle,
      timestamp: new Date().toISOString(),
    })

    // In production, send to BD Command Center webhook
    const bdCommandCenterUrl = process.env.BD_COMMAND_CENTER_URL
    
    if (bdCommandCenterUrl) {
      try {
        await fetch(bdCommandCenterUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'federal_sled_inquiry',
            source: 'vblx-website',
            priority: data.timeline === 'immediate' ? 'high' : 'normal',
            data: {
              ...data,
              submittedAt: new Date().toISOString(),
            },
          }),
        })
      } catch (webhookError) {
        // Log but don't fail the request if webhook fails
        console.error('BD Command Center webhook error:', webhookError)
      }
    }

    // In production, you might also:
    // - Send to Salesforce for federal opportunity tracking
    // - Trigger BD workflow automation
    // - Create entry in opportunity pipeline
    // - Send internal notification to capture team

    return NextResponse.json({
      success: true,
      message: 'Federal/SLED inquiry submitted successfully',
      opportunityId: `FED-${Date.now()}`, // Placeholder opportunity ID
      cageCode: '9Z4X2',
    })

  } catch (error) {
    console.error('Federal form submission error:', error)
    
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
