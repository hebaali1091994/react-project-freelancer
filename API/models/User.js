const mongoose = require("mongoose");
const skills = require("./Skill");
const notification = mongoose.Schema({

  body: { type: String },
  link: { type: String },
  date: { type: Date },
  sj: { type: Boolean, default: false }

})
const UserSchema = mongoose.Schema({
  userName: { type: String, unique: true },
  Email: { type: String, required: true, unique: true },
  Phone: { type: Number, min: 10 },
  Password: { type: String, required: true },
  Image: { type: String },
  Rating: { type: String },
  typeUser: { type: String, default: "user" },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  whatDo: { type: String, default: null, minLength: 10 },
  Description: { type: String, default: null, minLength: 100 },
  Language: { type: String, default: null },
  dateOfBirth: { type: Date, default: null },
  linkAcount: { type: String, default: null },
  acountType: { type: String, default: null },
  Address: { type: String },
  City: { type: String },
  State: { type: String },
  zipCode: { type: String },
  Country: { type: String },
  projectid: [{ type: mongoose.Schema.Types.ObjectId }],
  skills: [
    {
      img: { type: String },
      first: { type: String },
      Last: { type: String },
      description: { type: String },
      DescribeU: { type: String },
      DataS: { type: String },
      birht: { type: Date },
      Address: { type: String }

    }],
  noti: [
    notification
  ],
  bids: { type: Number, default: 100 },
  Country: { type: String },
  img: {
    type: String
  }
}, { timestamps: true });


module.exports = mongoose.model("users", UserSchema);
