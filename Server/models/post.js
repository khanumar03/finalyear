const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema(
    {
        data: [{type: String}],
        inprocessing: {type: Boolean},
        postBy: {type: ObjectId, ref:"User"},
        Like: [{type: ObjectId, ref: "User"}],
    },
  {
    timestamp: true,
  },
);

mongoose.model("Post", postSchema);
