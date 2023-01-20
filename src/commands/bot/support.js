const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Support server")
                .setURL(client.config.discord.serverInvite)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `<:que:1065895762682187906>・Support`,
        desc: `Make your server even better with Bot!`,
        image: "https://share.creavite.co/WYMlziHH45dOwEb3.gif",
        url: client.config.discord.serverInvite,
        components: [row],
        type: 'editreply'
    }, interaction)
}

 