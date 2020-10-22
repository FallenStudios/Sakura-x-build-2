const { MessageEmbed } = require('discord.js');
const prefix = "/"

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new MessageEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Sakura X`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.name}\n**Description:** ${command.description || "No Description"}\n**Usage:** ${command.usage || "No Usage"}\n**Aliases:** ${command.aliases}`)
            .setFooter("Sakura X || xFallen54x#2399", bot.user.displayAvatarURL)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new MessageEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor(colours.redlight)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new MessageEmbed()
        .setColor("#63798")
        .setAuthor(`Sakura X Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Sakura X!\nThe bot prefix is: ${prefix}`)
        .addField(`Music:`, "``Play`` ``Search`` ``Queue`` ``Nowplaying`` ``Loop`` ``Lyrics`` ``Skip`` ``Skipto`` ``Pause`` ``Resume`` ``Stop`` ``Shuffle`` ``Volume`` ``Remove``")
        .addField(`Moderation:`, "``Kick`` ``Ban`` ``Lock`` ``prune``")
        .addField("Utility", "``Help`` ``Uptime``")
        .setFooter("Sakura X || xFallen54x#2399", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}

module.exports.name = "Help"
module.exports.aliases = ["h","commands"]
module.exports.usage = `${prefix}help [command]`
module.exports.description = "\`Evaluate the bot (Owner of bot Only\`"