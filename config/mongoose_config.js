const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/users',{});
const userSchema = {
    firstname : String,
    lastname: String,
    email: String,
    password: String,
    number: String
}
const user = mongoose.model("users", userSchema);
module.exports = user;