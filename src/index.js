
const discord = require('discord.js');
const message = require('./listeners/message/message');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});
const { registerCommands, registerEvents } = require('./utils/registry');
(async () => {
    client.login(process.env.TOKEN);
    client.commands = new Map();
    client.queue = new Map();
    require("./database/connect.js");
    client.models = { user: require("./database/models/user.js"), guild: require("./database/models/guild.js")};
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../listeners');
    await registerCommands(client, '../commands');
    
})();


