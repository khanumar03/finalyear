const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    role: { type: Boolean, default: false},
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      sparse: true,
    },
    picture: {
      type: String,
    },
    request: [{ type: String }],
    following: [
      {
         type: String ,
      },
    ],
    followers: [
      {
        type: String
      }
    ]
  },
  {
    timestamp: true,
  }
);

mongoose.model("User", userSchema);
