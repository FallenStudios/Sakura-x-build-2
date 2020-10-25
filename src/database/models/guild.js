const { model, Schema} = require('mongoose');

class GeneralModule {
    prefix = "s.";
    blacklistedChannels = [];
    autoRoles = [];
}

class AutoMod {
    autoDetectToxic = false;
    autoDeleteMessages = true;
    filters = [];
    blacklistedWords = [];
    blacklistedLinks = [];
    autoWarnUsers = true;
    filterThreshold = 5;
}

class WelcomeMessage {
    backroundURL = '';
    title = '';
    message = ''
}

class LeaveMessage {
    backroundURL = '';
    title = '';
    message = ''
}

const guildSchema = new Schema({
    _id: String,
    general: {type: Object, default: new GeneralModule()},
    automod: {type: Object, default: new AutoMod()},
    welcome: {type: Object, default: new WelcomeMessage()},
    leave: {type: Object, default: new LeaveMessage()},
})

module.exports = model('guild', guildSchema)



