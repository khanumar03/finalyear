require("../models/user")
const mongoose = require("mongoose")

const User = mongoose.model("User");


const saveduser = async (req,res) => {
    const { name, email, picture, role } =  req.body

    // console.log(name,email,picture);

    const result = await User.findOne({email: email})

    if(result) {
        return res.status(202).json({message: "already signup"})
    } 

    const  user = User.create({
        username: name,
        email: email,
        picture:picture,
        role: role
    })
}

module.exports = { saveduser }