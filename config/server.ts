module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  keys: ['b369e09c9d5c6272bea8cc79ebcb490945bcc1000eac4a7eed61b9a79ce87f56d13d72fc2415537e7fc211a565200bd49e9b53e1b7c7460395727b033a4455ac'],
});
