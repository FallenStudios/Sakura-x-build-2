const snekfetch = require("snekfetch");
const {MessageEmbed} = require("discord.js");
const { Category } = require("discord-akairo");

module.exports = {
    run: async(client, message, args) => {
       await message.delete()
       message.channel.send(`${message.author.username} sorry this function isn't availabe yet`)
    },
    aliases: [],
    description: "Pulls memes from reddit",
}

module.exports.help = {
    name: "Meme",
    usage: "meme",
    description: "Pulls memes from reddit(coming soon)",
    catagory: "Fun"
}