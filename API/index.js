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
const contract=require("./router/contract")
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



// io.on("connection", (Socket) => 

// {
//   Socket.on("getDoc", docId => {
//     safeJoin(docId);
//     Socket.emit("document", documents[docId]);
//   });
//   Socket.on("addDoc", doc => {
//     documents[doc.id] = doc;
//     safeJoin(doc.id);
//     io.emit("documents", Object.keys(documents));
//     Socket.emit("document", doc);
//   });


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
// MONGO_URL = mongoose.connect("mongodb+srv://freelance:12345@freelance.mhgq8.mongodb.net/freelance?retryWrites=true&w=majority")"

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
app.use("/contract",contract);

app.listen(5000, () => {
  console.log("BackEnd Server Is Running Work In Port : 5000");
});
