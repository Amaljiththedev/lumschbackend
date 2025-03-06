module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", 'https:'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://luminarylinesadmin.in',
            'https://www.luminarylines.school',
            'https://luminarylines.com',
            'https://www.luminarylines.com',
          ],
          'connect-src': [
            "'self'",
            'https:',
            'http://localhost:1337',
            'https://luminarylinesadmin.in',
          ],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://www.luminarylines.school',
        'https://luminarylines.com',
        'https://www.luminarylines.com',
        'https://luminarylinesadmin.in',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
      ],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 1000 * 1024 * 1024, // 1GB (adjust as needed)
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      path: '/uploads',
      maxAge: 31536000, // Cache for 1 year
    },
  },
];
