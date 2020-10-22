const {MessageEmbed} = require(`discord.js`);

module.exports = {
    aliases: ["ping"],
    description: "\`Shows how long the bot has been running and its latency\`",
    run: async(client, message, args) => {
      let totalseconds = (client.uptime / 1000);
      let hours = Math.floor(totalseconds / 3600)
      let days = Math.floor(totalseconds / 86400);
      totalseconds %=3600;
      let minutes = Math.floor(totalseconds / 60);
      let seconds = totalseconds % 60;

      let NewEmbed = new MessageEmbed()
      .setTitle("Sakura X Uptime")
      .addField("Days", days, true)
      .addField("Hours", hours, true)
      .addField("Minutes", minutes, true)
      .addField("Ping", new Date().getTime() - message.createdTimestamp + " ms", true)
      .setColor(0x2ECC71)
      .setTimestamp();

      message.channel.send(NewEmbed)
      }
  };
  