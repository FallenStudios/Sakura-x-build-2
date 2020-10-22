const snekfetch = require("snekfetch");
const {MessageEmbed} = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new MessageEmbed()
            .setColor(0x00A2E8)
            .setImage(allowed[randomnumber].data.url)
             message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        }
    },
    aliases: [],
    description: "\`Pulls memes from reddit\`",
}