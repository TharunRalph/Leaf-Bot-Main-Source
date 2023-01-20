const Discord = require('discord.js');

module.exports = (client, giveaway, winners) => {
    winners.forEach((member) => {
        client.embed({
            title: `<:giveaway:1065918316138483722>・Giveaway ended`,
            desc: `Congratulations ${member.user.username}! You won the giveaway!`,
            fields: [
                {
                    name: `🎁┆Prize`,
                    value: `${giveaway.prize}`,
                    inline: true
                },
                {
                    name: `🥳┆Giveaway`,
                    value: `[Click here](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id})`,
                    inline: true
                }
            ]
        
        }, member).catch(() => { });
    });
};