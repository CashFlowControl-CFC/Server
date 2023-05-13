const UserController = require('./user.controller')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
class AuthController{
    async register(req,res){
        const user = await UserController.addUser(req,res)
        const token = jwt.sign({ id: user.id }, 'secretkey');

        res.status(200).json({ token });
    }
    async authenticateUser(req, res) {
        try {
          const user = await UserController.getUserByEmail(req, res, true);
          const isPasswordMatch = await bcrypt.compare(req.body.pass, user.password);
          if (isPasswordMatch) {
            return res.status(200).send('true');
          } else {
            return res.status(401).send('Incorrect password');
          }
        } catch (err) {
          return res.status(500).send('Internal server error');
        }
      }
      
}

module.exports = new AuthController()