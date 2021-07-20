const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  employer: {
    type: Boolean,
    required: "Are you an employer?",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  startDate: {
    type: Date,
    required: true,
  },
  skillset: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },

  education: {
    type: String,
    required: true,
  },

  //// COMPANY ONLY INFO ////
  company: {
    type: String,
  },
  companyDesc: {
    type: String,
  },
  postedJobs: {
    // ????????????
  },
  Name: {},
});

userSchema.pre("save", function () {
  if (!this.isModified("password")) {
    return Promise.resolve();
  }
  if (this.password.length < 6) {
    return Promise.reject(
      new Error("Password must have at least 6 characters")
    );
  }
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;
  });
});

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
