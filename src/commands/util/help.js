const { MessageEmbed } = require('discord.js');
const prefix = "/"

module.exports.run = async (client, message, args) => {

        let embed = new MessageEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor("#63798")
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new MessageEmbed()
        .setColor("#63798")
        .setAuthor(`Sakura X Help`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Sakura X!\nThe bot prefix is: ${prefix}`)
        .addField(`Music:`, "``Play`` ``Search`` ``Queue`` ``Nowplaying`` ``Loop`` ``Lyrics`` ``Skip`` ``Skipto`` ``Pause`` ``Resume`` ``Stop`` ``Shuffle`` ``Volume`` ``Remove``")
        .addField(`Moderation:`, "``Kick`` ``Ban`` ``Lock`` ``prune``")
        .addField("Utility", "``Help`` ``Uptime``")
        .setFooter("Sakura X || xFallen54x#2399", client.user.displayAvatarURL);
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
};

module.exports.name = "Help"
module.exports.aliases = ["h","commands"]
module.exports.usage = `${prefix}help [command]`
module.exports.description = "\`Evaluate the bot (Owner of bot Only\`"