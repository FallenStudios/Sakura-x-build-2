const createBar = require("string-progressbar");
const { MessageEmbed } = require("discord.js");
const NumberSuffix = require(`number-suffix`);
const numberSuffix = new NumberSuffix({ precision: 2 });

module.exports = {
    aliases: [],
    description: "\`Show now playing song\`",
    run: async(client, message, args) => {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return message.reply("There is nothing playing.").catch(console.error);
        const song = queue.songs[0];
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        const left = song.duration - seek;

        let nowPlaying = new MessageEmbed()
            .setTitle("Now playing")
            .addField(`***${song.author}***`, `${song.title}`, true)
            .setURL(song.url)
            .setImage(song.thumbnail)
            .setColor("#F8AA2A")
            .setAuthor("Sakura X")
            .addField(
                "\u200b",
                new Date(seek * 1000).toISOString().substr(11, 8) +
                " [" +
                createBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
                "] " +
                (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
                false
            );

        if (song.duration > 0)
            nowPlaying.setFooter("Time Remaining: " + new Date(left * 1000).toISOString().substr(11, 8));
        return message.channel.send(nowPlaying);
    }
};
