const User = require("../models/User");

class UserController {
    async store(req, res) {
      const UserExists = await User.findOne({ email: req.body.email });
  
      if (UserExists) {
        return res.status(400).json({ error: "User already exists." });
      }
  
      const { email, name, password } = await User.create(req.body);
      return res.json({ name, email, password });
    }
}

module.exports = new UserController();