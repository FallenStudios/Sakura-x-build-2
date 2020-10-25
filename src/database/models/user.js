const { Rank } = require('canvacord');
const { model, Schema} = require('mongoose');

class RankCard {
    ImageURL = "";
    XpBarColor = "";
}

const userSchema = new Schema({
    _id: String,
    level: {type: Number, default: 1},
    xp: {type: Number, default: 0},
    xpcard: {type: Object, default: new RankCard()}
})

module.exports = model('user', userSchema)