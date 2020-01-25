const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth");
const User = require("../models/User");


class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        if(password !== user.password){
            return res.status(401).json({ error: "Password does not mach" });
        }

        const { _id, name  } = user;

        return res.json({
            token: jwt.sign({ _id, name }, authConfig.secret, { 
                expiresIn: authConfig.expiresIn
            })
        })
    }
}


module.exports = new SessionController();