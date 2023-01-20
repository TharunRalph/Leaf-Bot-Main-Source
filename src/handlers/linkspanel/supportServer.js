const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "support-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('Nothing selected')
                            .addOptions([
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "<:que:1065895762682187906>",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Invite Bot`,
                                    description: `Invite Bot to your server`,
                                    emoji: "<:env:1065928694805303356>",
                                    value: "invite-linkspanel",
                                },
                                {
                                    label: `Community Server`,
                                    description: `Join the community server!`,
                                    emoji: "🌍",
                                    value: "community-linkspanel",
                                },
                                {
                                    label: `Top.gg`,
                                    description: `Show the top.gg link`,
                                    emoji: "📃",
                                    value: "top.gg-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setLabel("Support Server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                client.embed({
                    title: `<:que:1065895762682187906>・Support Server`,
                    desc: `Make your server even better with Bot!`,
                    image: "https://share.creavite.co/WYMlziHH45dOwEb3.gif",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    })
}

 