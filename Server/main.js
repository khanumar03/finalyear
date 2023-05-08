require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/Router");
const { Server } = require("socket.io");
require("./models/user");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: true }));
app.use("/api", router);

mongoose.connect(process.env.ATLAS_URI).then((saved) => {
  console.log(`Database connected to localhost: `);
});

io.on("connection", (socket) => {
  console.log("connection ->", socket.id);

  socket.on("join", (room) => {
    console.log("join");
    socket.join(room);
  });
  socket.on("getdata", (data) => {
    io.to("room_one").emit("getdata", { data: data });
  });

  socket.on("accept",(data) => {
    io.to("room_one").emit("decline", {data: data})
  })
});

server.listen(4000, () => console.log("server connected"));
