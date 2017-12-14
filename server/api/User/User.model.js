const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  typeOfVan: String,
  photo: String,
  location: {
      latitude: Number,
      longitude: Number
    },
    image: {
     type: String, default: ''
   },
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }

});
const User = mongoose.model("User", userSchema);
module.exports = User;
