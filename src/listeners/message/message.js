const { AutoMod } = require("../../automod/main")

const { xp } = require('../../utils/level')
module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message) {
        AutoMod(message)
        //xp(client, message)
    }

    const guildData = await client.models.guild.findById(message.guild.id)
    if(!guildData) await client.models.guild.create({_id: message.guild.id})

    //let PREFIX = guildData.general.get(prefix)

    guildData.save()

    let PREFIX = "s-"

    if(!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+2).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+2);
    if(client.commands.get(cmdName))
        client.commands.get(cmdName)(client, message, argsToParse);
    else
        console.log("Command does not exist.");
};
