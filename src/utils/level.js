module.exports = {
    async xp(client, message){
        let xpAdd = Math.floor(Math.random() * 7) + 8;
        let AddMoney = Math.floor(Math.random() * 10) + 8;

        const userData = await client.models.user.findById(message.author.id)
        if(!userData) await client.models.user.create({_id: message.author.id})

        userData.wallet = userData.wallet + AddMoney;

        let curxp = userData.xp;
        let curlvl = userData.level;
        let nxtLvl = userData.level * 300;
        userData.xp = curxp + xpAdd;
        if (nxtLvl <= userData.xp) {
            userData.level = curlvl + 1;
            message.channel.send(`${message.author.tag} Leveled Up to ${curlvl + 1}`);
        }

        userData.save()
    }
}