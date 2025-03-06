module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://www.luminarylines.school',
        'https://luminarylines.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  // Configure the body parser for large files (replace 'strapi::body' with this):
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
  'strapi::public',
];