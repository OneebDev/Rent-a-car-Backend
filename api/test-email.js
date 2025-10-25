const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🧪 Testing email functionality...');
    console.log('API Key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
    console.log('From Email:', process.env.FROM_EMAIL || 'Car Rental <onboarding@resend.dev>');
    console.log('To Email:', process.env.TO_EMAIL || 'oneeb593@gmail.com');

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        error: 'RESEND_API_KEY is not configured' 
      });
    }

    const testResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Car Rental <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL || 'oneeb593@gmail.com'],
      subject: 'Test Email - Car Rental System',
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #ffffff; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 20px; }
            .status { background: #10b981; color: white; padding: 10px; border-radius: 4px; text-align: center; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">✅ Email Test Successful</h2>
            </div>

            <div class="content">
              <div class="status">
                <strong>Your email service is working correctly!</strong>
              </div>
              <p>This test email confirms that your car rental booking system can send notifications.</p>
              <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <div class="footer">
              <p>This is an automated test message from your car rental system.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });

    console.log("✅ Test email sent successfully:", testResponse);
    res.json({ 
      success: true, 
      message: 'Test email sent successfully', 
      data: testResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("❌ Error sending test email:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: {
        name: error.name,
        message: error.message
      }
    });
  }
}
