const createBar = require("string-progressbar");
const { MessageAttachment } = require("discord.js");
const canvacord = require('canvacord');
const NumberSuffix = require(`number-suffix`);
const numberSuffix = new NumberSuffix({ precision: 2 });

module.exports = {
    aliases: ["np"],
    description: "\`Show now playing song\`",
    run: async(client, message, args) => {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return message.reply("There is nothing playing.").catch(console.error);
        const song = queue.songs[0];
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        const left = song.duration - seek;

        let nowPlaying = new canvacord.Spotify()
            .setTitle("Now playing")
            .setStartTimestamp(Date.now() - seek * 1000)
            .setEndTimestamp(Date.now() + song.duration * 1000)
            .setAlbum(song.title)
            .setAuthor(song.author)
            .setImage(song.thumbnail)

            const PlayCard = await nowPlaying.build();
            

        if (song.duration > 0)

        return message.channel.send(new MessageAttachment(PlayCard, "music.png"));
    }
};

module.exports.help = {
    name: "Nowplaying",
    usage: "nowplaying",
    description: "Show now playing song",
    category: "Music"
  }
