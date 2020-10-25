const { canModifyQueue } = require("../../utils/queue");

module.exports = {
    run: async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    message.delete({ timeout: 5 }).catch(console.error);

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ paused the music.`).catch(console.error);
    }
  },
  name: "Pause",
  usage: "/pause",
  aliases: [],
  description: "\`Pause the currently playing music\`",
};

module.exports.help = {
  name: "Pause",
  usage: "pause",
  description: "Pause the currently playing music",
  category: "Music"
}

