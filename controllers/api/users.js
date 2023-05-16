const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create
  };
  
  async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
  }
  
function createJWT(user){
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'});
    // The sign method in the jsonwebtoken library is used to create JWTs.
}
