import nodemailer from 'nodemailer';

// In-memory storage
const contactSubmissions = [];
const newsletterSubscriptions = [];
let currentContactId = 1;
let currentNewsletterId = 1;

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-app-password'
    }
  });
};

// Validation
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateRequired = (value) => value && value.trim().length > 0;

// Email functions
async function sendContactNotification(submission) {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@tuckersroofing.com',
      to: 'info@tuckersroofing.com',
      subject: `New Contact Form Submission - ${submission.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Service:</strong> ${submission.service}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
  }
}

async function sendAutoReplyEmail(email, firstName, service) {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@tuckersroofing.com',
      to: email,
      subject: 'Thank you for contacting Tucker\'s Roofing',
      html: `
        <h2>Thank you for contacting Tucker's Roofing!</h2>
        <p>Dear ${firstName || 'valued customer'},</p>
        <p>We've received your inquiry about ${service || 'our services'} and will get back to you within 24 hours.</p>
        <p>Our team is committed to providing you with the highest quality service.</p>
        <p>Best regards,<br>Tucker's Roofing Team</p>
      `
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send auto-reply email:', error);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, method } = req;

  try {
    // Contact form submission
    if (url === '/api/contact' && method === 'POST') {
      const { firstName, lastName, email, phone, service, message } = req.body;
      
      if (!validateRequired(firstName) || !validateRequired(lastName) || 
          !validateEmail(email) || !validateRequired(phone) || 
          !validateRequired(service) || !validateRequired(message)) {
        return res.status(400).json({ error: "All fields are required and email must be valid" });
      }
      
      const sanitizedData = {
        firstName: firstName.trim().slice(0, 50),
        lastName: lastName.trim().slice(0, 50),
        email: email.trim(),
        phone: phone.replace(/[^\d\s\-\(\)\+]/g, '').slice(0, 20),
        service: service.trim(),
        message: message.trim().slice(0, 2000)
      };
      
      const submission = {
        id: currentContactId++,
        ...sanitizedData,
        createdAt: new Date()
      };
      
      contactSubmissions.push(submission);
      
      await Promise.all([
        sendContactNotification(submission),
        sendAutoReplyEmail(submission.email, submission.firstName, submission.service)
      ]);
      
      return res.json({ success: true, id: submission.id });
    }

    // Newsletter subscription
    if (url === '/api/newsletter' && method === 'POST') {
      const { email, firstName } = req.body;
      
      if (!validateEmail(email)) {
        return res.status(400).json({ error: "Valid email is required" });
      }
      
      const subscription = {
        id: currentNewsletterId++,
        email: email.trim(),
        firstName: firstName ? firstName.trim() : '',
        createdAt: new Date()
      };
      
      newsletterSubscriptions.push(subscription);
      return res.json({ success: true, id: subscription.id });
    }

    // Sitemap
    if (url === '/sitemap.xml' && method === 'GET') {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://tuckersroofing.com/</loc><priority>1.0</priority></url>
  <url><loc>https://tuckersroofing.com/services/roofing</loc><priority>0.9</priority></url>
  <url><loc>https://tuckersroofing.com/services/remodeling</loc><priority>0.9</priority></url>
  <url><loc>https://tuckersroofing.com/services/construction</loc><priority>0.9</priority></url>
  <url><loc>https://tuckersroofing.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://tuckersroofing.com/contact</loc><priority>0.8</priority></url>
  <url><loc>https://tuckersroofing.com/gallery</loc><priority>0.7</priority></url>
</urlset>`;
      res.setHeader('Content-Type', 'application/xml');
      return res.send(sitemap);
    }

    // Robots.txt
    if (url === '/robots.txt' && method === 'GET') {
      const robots = `User-agent: *\nAllow: /\nSitemap: https://tuckersroofing.com/sitemap.xml`;
      res.setHeader('Content-Type', 'text/plain');
      return res.send(robots);
    }

    return res.status(404).json({ error: "Not found" });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: "Internal server error" });
  }
}