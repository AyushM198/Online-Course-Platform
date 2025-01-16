const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: "Signup successfully",
            success: true
        })
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


const login = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = "Auth failed Email or password is incorrect";
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            })
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            })
        }
        const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(201).json({
            message: "Login successfully",
            success: true,
            token,
            email,
            name:user.name
        })
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

module.exports = {
    signup, login
}