const PREFIX = "/";
const { AutoMod } = require("../../automod/main")
const { xp } = require('../../utils/level')
module.exports = (client, message) => {
    if(message.author.bot) return;
    if(message) {
        AutoMod(message)
        xp(client, message)
    }
    if(!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+1);
    if(client.commands.get(cmdName))
        client.commands.get(cmdName)(client, message, argsToParse);
    else
        console.log("Command does not exist.");
};