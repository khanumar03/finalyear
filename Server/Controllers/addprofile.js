require("../models/user");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const addprofile = async (req, res) => {
  const { email, currentuser } = req.body;

  if (email === currentuser) {
    return res.status(205).json({ message: "you can not add your self" });
  }

  const doc = await User.findOne({ email: email });

  if (!doc) {
    return res
      .status(205)
      .json({ message: "user with this email does not exist" });
  }

  if (doc.request.includes(currentuser)) {
    return res.status(201).json({ message: "already in queue" });
  }

  if (doc.followers.includes(currentuser)) {
    console.log("ok");
    return res.status(201).json({ message: "already friend" });
  }


  await User.findByIdAndUpdate(
    doc._id,
    {
      $push: { request: currentuser },
    },
    {
      new: true,
    }
  )
  
  return res.status(200).json({ message: "request sent" });
};

module.exports = { addprofile };
