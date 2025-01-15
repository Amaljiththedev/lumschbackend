export default ({ env }) => ({

    // Users Permissions Plugin Configuration

      config: {
        jwtSecret: env('JWT_SECRET', '+tzGL61SzkKOcHT1QO3Uew=='),  // JWT Secret for authentication

    },
  });