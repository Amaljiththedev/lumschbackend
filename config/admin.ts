export default ({ env }) => ({
  auth: {
    secret: 'UuvxA/ODhee0qWDbO7LpcQ==',
  },
  apiToken: {
    salt: 'kWpYeEQ/WgSCT6/VNZxItw==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
