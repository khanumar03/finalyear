require("../models/user");
const mongoose = require(`mongoose`);

const User = mongoose.model("User");

const acceptrequest = async (req, res) => {
  const email1 = req.query.email1;
  const email2 = req.query.email2;

  console.log(email1, email2);

  const user = await User.findOneAndUpdate(
    { email: email1 },
    {
      $pull: { request: email2 },
      $push: { followers: email2 },
    }
  );

  if (!user) {
    return res.status(401).json({ message: "something went wrong" });
  }

  await User.findOneAndUpdate(
    {
      email: email2,
    },
    {
      $push: { following: email1 },
    }
  );

  return res.status(201).json({ email: email2 });
};

module.exports = { acceptrequest };
