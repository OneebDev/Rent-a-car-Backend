# 🚀 Backend Deployment Guide

## Prerequisites

1. **GitHub Repository**: Push your backend code to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Resend Account**: Sign up at [resend.com](https://resend.com) for email service

## Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Backend ready for deployment"

# Add remote origin (replace with your GitHub repository URL)
git remote add origin https://github.com/OneebDev/Rent-a-car-Backend.git

# Push to main branch
git push -u origin main
```

## Step 2: Setup Resend Email Service

### 2.1 Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2.2 Get API Key
1. Go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it "Car Rental Backend"
4. Copy the API key (starts with `re_`)

### 2.3 Verify Domain (Optional but Recommended)
1. Go to [Domains](https://resend.com/domains)
2. Add your domain
3. Follow DNS verification steps
4. This improves email deliverability

## Step 3: Deploy on Vercel

### 3.1 Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository: `OneebDev/Rent-a-car-Backend`

### 3.2 Configure Project
- **Framework Preset**: Other
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: Leave empty (serverless functions)

### 3.3 Environment Variables
Add the following environment variables:

```
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=Car Rental <onboarding@resend.dev>
TO_EMAIL=your-email@example.com
NODE_ENV=production
```

**Important**: Replace `re_your_actual_api_key_here` with your actual Resend API key.

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your backend will be available at: `https://your-backend-domain.vercel.app`

## Step 4: Test Deployment

### 4.1 Test Email Functionality
```bash
curl https://your-backend-domain.vercel.app/api/test-email
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully",
  "data": { ... }
}
```

### 4.2 Test from Frontend
1. Deploy your frontend
2. Configure frontend to use backend URL
3. Test booking form submission
4. Check if emails are received

## 🔧 Troubleshooting

### Common Issues

1. **"Invalid API key" Error**
   - Verify your Resend API key is correct
   - Check if API key starts with `re_`
   - Ensure key is active in Resend dashboard

2. **"Domain not verified" Error**
   - Use `onboarding@resend.dev` for testing
   - Or verify your domain in Resend dashboard
   - Update `FROM_EMAIL` environment variable

3. **"Rate limit exceeded" Error**
   - Check your Resend usage limits
   - Wait and retry
   - Consider upgrading Resend plan

4. **CORS Errors**
   - Backend has CORS enabled for all origins
   - Check if frontend URL is correct
   - Verify API endpoints are accessible

### Debug Steps

1. **Check Vercel Function Logs**
   ```bash
   vercel logs --follow
   ```

2. **Test API Endpoints**
   ```bash
   # Test email endpoint
   curl https://your-backend-domain.vercel.app/api/test-email
   
   # Test booking endpoint (with data)
   curl -X POST https://your-backend-domain.vercel.app/api/send-booking-email \
     -H "Content-Type: application/json" \
     -d '{"type":"contact","data":{"name":"Test","email":"test@example.com","message":"Test message"}}'
   ```

3. **Check Environment Variables**
   - Go to Vercel project settings
   - Navigate to "Environment Variables"
   - Verify all variables are set correctly

## 📧 Email Configuration

### Production Email Setup

1. **Use Verified Domain** (Recommended)
   ```
   FROM_EMAIL=Car Rental <noreply@yourdomain.com>
   ```

2. **Use Resend Default** (For Testing)
   ```
   FROM_EMAIL=Car Rental <onboarding@resend.dev>
   ```

### Email Templates

The backend sends professional HTML emails for:
- **Booking confirmations** with full details
- **Corporate enquiries** with business information
- **Contact form** submissions
- **Test emails** for debugging

## 🔒 Security Features

- **Environment variables** for sensitive data
- **CORS enabled** for frontend integration
- **Input validation** for all endpoints
- **Error handling** with user-friendly messages
- **Rate limiting** via Resend service

## 📊 Monitoring

1. **Vercel Analytics**: Available in dashboard
2. **Function Logs**: Monitor API calls and errors
3. **Resend Dashboard**: Monitor email delivery
4. **Error Tracking**: Check Vercel function logs

## 🔄 Continuous Deployment

- **Automatic Deployments**: Every push to main branch
- **Preview Deployments**: Pull requests get preview deployments
- **Manual Deployments**: Can be triggered from Vercel dashboard

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Resend account created
- [ ] API key obtained
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Build successful
- [ ] Backend accessible
- [ ] Test email endpoint working
- [ ] Frontend integration working
- [ ] Email notifications received
- [ ] CORS configured correctly

## 🎉 Success!

Your backend is now deployed and ready to handle email notifications for your car rental application!

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify Resend API key and domain
3. Test endpoints individually
4. Check environment variables
5. Contact Resend support for email-related issues
