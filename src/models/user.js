const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    emailId: { type: String, required: true, unique: true },
    password: { type: String },
    age: { type: Number },
    gender: { type: String },
    photoUrl: {
      type: String,
      default:
        "https://img.freepik.com/premium-photo/white-circle-with-mans-face-round-circle-around-it_1057389-84874.jpg",
    },
    about: { type: String, default: "I am developer" },
    skills: { type: [String] },
  },
  { timestamps: true }
);
userSchema.index({ emailId: 1 }, { unique: true });
module.exports = mongoose.model("User", userSchema);
