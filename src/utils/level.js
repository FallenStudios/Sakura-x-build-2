const { use } = require("passport");

module.exports = {
    async xp(client, message){
        let xpAdd = Math.floor(Math.random() * 7) + 8;

        const userData = await client.models.user.findById(message.author.id)
        if(!userData) await client.models.user.create({_id: message.author.id})

        let curxp = userData.xp;
        
        let curlvl = userData.level;
        let nxtLvl = userData.level * 300;
        userData.xp = curxp + xpAdd;
        if (nxtLvl <= userData.xp) {
            userData.level = curlvl + 1;
            userData.xp = 0
            message.channel.send(`${message.author.tag} is now Level ${userData.level}`);
        }

        userData.save()
    }
}