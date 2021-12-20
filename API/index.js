const express = require("express");
const app = express();
const http = require("http").createServer(app);
//const io = require("socket.io")(http);
const dotenv = require("dotenv");
const middleware = require("i18next-http-middleware");
dotenv.config();
const users = require("./router/user");
const auth = require("./router/auth");
const Product = require("./router/Product");
const Project = require("./router/Project");
const Cart = require("./router/Cart");
const Order = require("./router/Order");
const Category = require("./router/Category");
const conversion = require("./router/conversion");
const message = require("./router/message");
const database = require("./database");
const multer = require("multer");
const path = require('path');

const cors = require("cors")
// server = require('http').Server(app),
// io = require('socket.io')(server);
// const { Socket } = require("socket.io");
app.use(cors({}))
app.use(express.json());
app.get("/api/test", () => {
  console.log("Test Is Succefual");
});
<<<<<<< HEAD

let onlineusers = []

const addNewUser = (username, SocketId) => {

  !onlineusers.some((user) => user.username === username) && onlineusers.push({ username, SocketId })
}
const removeuser = (SocketId) => {

  onlineusers = onlineusers.filter((user) => user.SocketId != SocketId)
}
const getUser = (username) => {
  return onlineusers.find((user) => user.username === username)

}



// io.on("connection", (Socket) => {

// Socket.on("newUser",(username)=>{

//     addNewUser(username,Socket.id)
// })
=======
  
 

// io.on("connection", (Socket) => 
  
// {
//   socket.on("getDoc", docId => {
//     safeJoin(docId);
//     socket.emit("document", documents[docId]);
//   });
//   socket.on("addDoc", doc => {
//     documents[doc.id] = doc;
//     safeJoin(doc.id);
//     io.emit("documents", Object.keys(documents));
//     socket.emit("document", doc);
//   });
//   socket.on("editDoc", doc => {
//     documents[doc.id] = doc;
//     socket.to(doc.id).emit("document", doc);
//   });
>>>>>>> 84cbf527dc98cddf16350f0ffc5cafe86cd8e418

//   Socket.on("disconnecter", () => {
//     removeuser(Socket.id)
//   });
// });



app.use("/images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File Has Been Uploaded");
});






app.use("/users", users);
app.use("/auth", auth);
app.use("/Products", Product);
app.use("/Cart", Cart);
app.use("/Order", Order);
app.use("/Project", Project);
app.use("/Category", Category);
app.use("/conversion", conversion);
app.use("/message", message);
// MONGO_URL = mongoose.connect("mongodb+srv://freelance:12345@freelance.mhgq8.mongodb.net/freelace?retryWrites=true&w=majority");


app.listen(5000, () => {
  console.log("BackEnd Server Is Running Work In Port : 5000");
});
