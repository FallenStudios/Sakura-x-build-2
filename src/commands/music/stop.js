const { canModifyQueue } = require("../../utils/queue");


module.exports = {
    run: async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ stopped the music!`).catch(console.error);
  },
  aliases: [],
  description: "\`Stops the music\`",
};