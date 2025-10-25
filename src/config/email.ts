// Email Configuration
// Environment variables are used for production, fallback to defaults for development
// Get your API key from: https://resend.com/api-keys

export const EMAIL_CONFIG = {
  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  FROM_EMAIL: process.env.FROM_EMAIL || 'Car Rental <onboarding@resend.dev>',
  TO_EMAIL: process.env.TO_EMAIL || 'oneeb593@gmail.com'
};
