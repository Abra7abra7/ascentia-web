import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // In production, we verify the signature from Stripe/Lemon Squeezy here
    const signature = request.headers.get('stripe-signature');
    if (!signature) {
      return new Response(JSON.stringify({ error: 'Missing signature' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Process checkout session completed
    if (body.type === 'checkout.session.completed') {
      const session = body.data.object;
      const customerName = session.customer_details?.name || 'Zákazník';
      const phoneNumber = session.customer_details?.phone;
      const courseName = session.metadata?.course_name || 'Automatizácia firiem pomocou AI agentov';

      if (phoneNumber) {
        // Prepare Meta API request
        const metaPayload = {
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'template',
          template: {
            name: 'ascentia_welcome_course',
            language: { code: 'sk' },
            components: [
              {
                type: 'body',
                parameters: [
                  { type: 'text', text: customerName },
                  { type: 'text', text: courseName }
                ]
              }
            ]
          }
        };

        // Mock call to Meta API: https://graph.facebook.com/v21.0/YOUR_PHONE_NUMBER_ID/messages
        console.log('Sending WhatsApp notification via Meta API:', JSON.stringify(metaPayload, null, 2));
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
