const { canModifyQueue } = require("../../utils/queue");

module.exports = {
    run: async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      message.delete({ timeout: 5 }).catch(console.error);
      return queue.textChannel.send(`${message.author} ▶ resumed the music!`).catch(console.error);
    }
    message.delete({ timeout: 5 }).catch(console.error);
    return message.reply("The queue is not paused.").catch(console.error);
  },
  aliases: ["r"],
  description: "\`Resume currently playing music\`",
};
