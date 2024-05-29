// generateHash.js
const bcrypt = require('bcryptjs');

const password = '9606.ja06';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});