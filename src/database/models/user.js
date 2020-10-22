const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,
    wallet: {type: Number, default: 0},
    xp: {type: Number, default: 0},
    level: {type: Number, default: 1}
})

module.exports = mongoose.model("User", UserSchema);