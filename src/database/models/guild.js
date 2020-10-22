const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    commands: [],
    prefix: {type: String, default: "s-"},
    autoroles: [],
})

module.exports = mongoose.model("Guild", UserSchema);