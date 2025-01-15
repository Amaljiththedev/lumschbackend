export default ({ env }) => ({
  auth: {
    secret: 'UuvxA/ODhee0qWDbO7LpcQ==',
  },
  apiToken: {
    salt: 'kWpYeEQ/WgSCT6/VNZxItw==',
  },
  transfer: {
    token: {
      salt: 'oBcZNMV+kpdnqfDbrylr9A==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
