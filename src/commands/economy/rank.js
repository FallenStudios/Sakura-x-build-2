
const canvacord = require('canvacord');
const { MessageAttachment } = require('discord.js');
const { path } = require("join");
const { join } = require('path');
const message = require('../../listeners/message/message');

module.exports.run = async (client, message, args) => {
    
    const userData = await client.models.user.findById(message.author.id)
    if(!userData) await client.models.user.create({_id: message.author.id})

    const img = message.member.user.avatarURL;

    const rank = new canvacord.Rank()
    .setAvatar(img)
    .setCurrentXP(userData.xp)
    .setRequiredXP(userData.level * 300)
    .setStatus(message.member.presence.status)
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(message.member.username)
    .setDiscriminator(message.member.tag);
 
rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });

}

module.exports.aliases =  ['l']
module.exports.description= "\`Toggle music loop\`"
