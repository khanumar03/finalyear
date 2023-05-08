require("../models/user")
const mongoose = require(`mongoose`)

const User = mongoose.model("User");

const currentuser = async (req, res) => {
    const email = req.query.email

    const  user  = await User.findOne({email: email})

    if(!user) {
        return res.status(401).json({message: "user not found"})
    }
    return res.status(201).json({data: user})
}

module.exports = { currentuser }