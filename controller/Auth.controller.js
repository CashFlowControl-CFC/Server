const UserController = require('./user.controller')
const bcrypt = require('bcrypt')
class AuthController{
    async register(req,res){
        await UserController.addUser(req,res)
    }
    async authenticateUser(req, res) {
        try {
          const user = await UserController.getUserByEmail(req, res, true);
          console.log('before if');
          const isPasswordMatch = await bcrypt.compare(req.body.pass, user.hashPass);
          if (isPasswordMatch) {
            console.log('logged in');
            return res.status(200).send('true');
          } else {
            console.log('incorrect password');
            return res.status(401).send('Incorrect password');
          }
        } catch (err) {
          console.error(err);
          return res.status(500).send('Internal server error');
        }
      }
      
}

module.exports = new AuthController()