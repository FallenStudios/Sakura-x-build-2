const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect("mongodb+srv://User:MichelLee42@cluster0.ehok5.mongodb.net/SAKURA-X-BOT?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connect()