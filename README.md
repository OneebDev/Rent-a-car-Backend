# Rent-a-Car Backend API

A Node.js/Express backend API for the car rental application with email notification functionality.

## 🚀 Features

- **Email notifications** using Resend API
- **Booking form** email handling
- **Contact form** email handling
- **Corporate enquiry** email handling
- **CORS enabled** for frontend integration
- **TypeScript** for type safety
- **Vercel deployment** ready

## 🛠 Technology Stack

- **Node.js** with Express.js
- **TypeScript** for type safety
- **Resend** for email notifications
- **CORS** for cross-origin requests
- **Vercel** for serverless deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```bash
# Email Configuration
RESEND_API_KEY=your_actual_resend_api_key_here
FROM_EMAIL=Car Rental <your-verified-domain@yourdomain.com>
TO_EMAIL=your-email@example.com

# Server Configuration
NODE_ENV=development
PORT=3001
```

## 📧 Email Configuration

### 1. Get Resend API Key
- Visit [https://resend.com/api-keys](https://resend.com/api-keys)
- Create a new API key
- Add it to your environment variables

### 2. Configure Email Settings
- **FROM_EMAIL**: Use your verified domain for better deliverability
- **TO_EMAIL**: Email address to receive notifications
- **RESEND_API_KEY**: Your Resend API key

## 🚀 Deployment on Vercel

### 1. Connect to GitHub
- Push this repository to GitHub
- Connect your GitHub repository to Vercel

### 2. Configure Environment Variables
In Vercel dashboard, add:
```
RESEND_API_KEY=your_actual_resend_api_key_here
FROM_EMAIL=Car Rental <your-verified-domain@yourdomain.com>
TO_EMAIL=your-email@example.com
NODE_ENV=production
```

### 3. Deploy
- Vercel will automatically deploy on every push to main branch
- Your API will be available at `https://your-backend-domain.vercel.app`

## 📡 API Endpoints

### POST `/api/send-booking-email`
Sends booking, contact, or corporate enquiry emails.

**Request Body:**
```json
{
  "type": "booking" | "corporate" | "contact",
  "data": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "cnic": "string",
    // ... other fields based on type
  }
}
```

### GET `/api/test-email`
Tests email functionality and configuration.

**Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully",
  "data": { ... }
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── config/
│   └── email.ts          # Email configuration
api/
├── send-booking-email.js # Main email endpoint
└── test-email.js         # Email testing endpoint
server.ts                  # Express server setup
vercel.json               # Vercel deployment config
```

## 🧪 Testing

### Test Email Functionality
```bash
curl https://your-backend-domain.vercel.app/api/test-email
```

### Monitor Logs
```bash
vercel logs --follow
```

## 🔒 Security Features

- **CORS enabled** for frontend integration
- **Input validation** for all endpoints
- **Error handling** with user-friendly messages
- **Environment variable** protection
- **Rate limiting** (via Resend)

## 📧 Email Templates

The API sends professional HTML emails for:
- **Booking confirmations** with full details
- **Corporate enquiries** with business information
- **Contact form** submissions
- **Test emails** for debugging

## 🚨 Error Handling

The API provides detailed error messages for:
- Missing API keys
- Invalid email addresses
- Rate limit exceeded
- Domain verification issues
- Network errors

## 🔗 Frontend Integration

This backend is designed to work with the Rent-a-Car frontend:
- CORS configured for frontend domain
- RESTful API endpoints
- JSON request/response format
- Error handling for frontend display