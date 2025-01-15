module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  keys: ['4c024ab47003387e60a0ab3bea8d3aaa648c217d397b1787c08a137bd9a738eeaacfe4fbd29970372adee85796afc7a15fcd951f1aa44c4e7d74d40feeca5eb9'],
});
