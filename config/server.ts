module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  url: process.env.URL || 'http://localhost:1337',
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || 'your-admin-jwt-secret',
    },
  },
  keys: process.env.APP_KEYS ? process.env.APP_KEYS.split(',') : ['yourRandomKey1', 'yourRandomKey2'], // Set app keys
};
