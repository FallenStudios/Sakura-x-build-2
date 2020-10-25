const { MessageEmbed } = require(`discord.js`);

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports = {
    name: "Eval",
    usage: "/Eval [Input]",
    aliases: [],
    description: "\`Evaluate the bot (Owner of bot Only\`",
    run: async(client, message, args) => {
        if (message.author.id !== `463370198142025729`) return message.channel.send(`You do not have acces to execute this command`)
        try {
            var evaled = eval(args)
            if (typeof evaled !== `string`)
                evaled = require('util').inspect(evaled);
            let EvalEmbed = new MessageEmbed()
                .setTitle(`Eval Successful`)
                .addField("Input", `\`\`\`xl\n${clean(message)}\n\`\`\``)
                .addField("Output", `\`\`\`xl\n${clean(evaled)}\n\`\`\``)
                .setTimestamp(); 
            message.channel.send(EvalEmbed)
        } catch (err) {
                let EvalEmbed = new MessageEmbed()
                .setTitle(`Eval Unsuccessful`)
                .addField("Input", `\`\`\`xl\n${clean(message)}\n\`\`\``)
                .addField("Output", `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
                .setTimestamp(); 
            message.channel.send(EvalEmbed)
        }
    }
};