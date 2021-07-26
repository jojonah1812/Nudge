const mongoose = require("mongoose");
const { Schema } = mongoose;

const SALT_ROUNDS = 6;

const jobsSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  datePosted: {
    type: Date,
    //required: true,
    default: () => new Date(),
  },
  position: {
    type: String,
    required: true,
  },
  positionDesc: {
    type: String,
    required: true,
  },
  positionReqLang: {
    type: String,
    required: true,
  },
  positionReqTech: {
    type: String,
    required: true,
  },
  positionReqExp: {
    type: String,
    required: true,
  },
  salaryRange: {
    type: String,
    required: true,
  },
  nameAuthor: {
    type: String,
    required: true,
  },
  emailAuthor: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});

// jobsSchema.pre("save", function () {
//   if (!this.isModified("password")) {
//     return Promise.resolve();
//   }
//   if (this.password.length < 6) {
//     return Promise.reject(
//       new Error("Password must have at least 6 characters")
//     );
//   }
//   return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
//     this.password = hash;
//   });
// });

// jobsSchema.methods.verifyPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
