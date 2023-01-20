const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const promises = [
        client.shard.broadcastEval(client => client.guilds.cache.size),
        client.shard.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        client.shard.broadcastEval(client => client.channels.cache.size),
        client.shard.broadcastEval(client => client.voice.adapters.size)
    ];
    return Promise.all(promises)
        .then(async results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
            const totalChannels = results[2].reduce((acc, channelCount) => acc + channelCount, 0);
            const totalVoice = results[3].reduce((acc, voiceCount) => acc + voiceCount, 0);

            const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

            client.embed({
                title: `ℹ・Bot information`,
                desc: `____________________________`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                image: "https://share.creavite.co/zqLgHVmIUsmDqFJM.gif",
                fields: [
               {
                    name: "ℹ️ | Information",
                    value: `I Am A Bot With More Then 300+ Commands Which Is To Make A Whole Server With One Bot!`,
                    inline: false,
                },
                {
                    name: "❓| About Me",
                    value: `I Am A Bot Designed By <@981063126604730388>`,
                    inline: false,
                },
                {
                    name: "🤖| Wanna Add Me",
                    value: `Add Me: [[ADD ME]](${client.config.discord.botInvite})`,
                    inline: true,
                },
                {
                    name: "❓| Support Server",
                    value: `Join Now: [[SUPPORT SERVER]](${client.config.discord.serverInvite})`,
                    inline: true,
                }
            
            
            ],

                type: 'editreply'
            }, interaction)
        })
}

 
