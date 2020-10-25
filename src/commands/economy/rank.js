
const canvacord = require('canvacord');
const { Category } = require('discord-akairo');
const { MessageAttachment } = require('discord.js');
const { path } = require("join");
const { use } = require('passport');
const { join } = require('path');
const message = require('../../listeners/message/message');

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    
    const userData = await client.models.user.findById(user.id)
    if(!userData) await client.models.user.create({_id: user.id})

    const rank = new canvacord.Rank()
    .setAvatar(user.avatarURL({ format: "png", size: 1024 }))
    .setCurrentXP(userData.xp)
    .setLevel(userData.level)
    .setBackground("IMAGE" ,userData.xpcard.ImageURL || "https://media.discordapp.net/attachments/749424450591522857/769408165971361792/rank.png")
    .setRequiredXP(userData.level * 300)
    .setStatus(user.presence.status)
    .setProgressBar( userData.xpcard.XpBarColor || "#BA55D3", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);
 
    const card = await rank.build();
    console.log(userData)
    return message.channel.send(new MessageAttachment(card, "rank.png"));

}

module.exports.aliases = ['l']
module.exports.description= "Displays user rank"

module.exports.help = {
    name: "Rank",
    usage: ``,
    description: "Displays user rank",
    category: "Econnomy"
}
