const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      maxlength: 50,
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwx0iqHNq4RnrwNH9ZDpDDMYrQqDpHifjBWL1SQt2CTNuom8Cf8BTaMJgk&s=10",
    },
    about: {
      type: String,
      default: "This is a default value in the user about section",
      maxlength: 100,
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
