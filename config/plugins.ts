export default ({ env }) => ({
    email: {
      config: {
        provider: 'gmail',  // Use 'smtp' if using a custom SMTP provider
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: env('EMAIL_USERNAME', 'luminarylines@gmail.com'),  // Your Gmail email
            pass: env('EMAIL_PASSWORD', '3LzwNMHxnGBff5L'),  // Use app-specific password for Gmail
          },
        },
        settings: {
          defaultFrom: 'luminarylines@gmail.com',  // Your email
          defaultReplyTo: 'luminarylines@gmail.com',  // Your email
        },
      },
    },
  
    // Users Permissions Plugin Configuration
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', '+tzGL61SzkKOcHT1QO3Uew=='),  // JWT Secret for authentication
      },
    },
  });