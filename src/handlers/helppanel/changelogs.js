const Discord = require('discord.js');

module.exports = async (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "changelogs-Bothelp") {
                interaction.deferUpdate();

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "<:mob:1065939198441435167>",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
                                    emoji: "<:env:1065928694805303356>",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "<:que:1065895762682187906>",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "📃",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: "📃・Changelogs",
                    desc: `_____`,
                    thumbnail: client.user.avatarURL({ size: 1024 }),
                    fields: [
            	        {
                            name: "<:announce:1065916849486823445>┆Alert!",
                            value: 'This is the changelogs of the bot, here you can see the changes that have been made to the bot.',
                            inline: false,
                        },
                        {
                            name: "📃┆Changelogs",
                            value: '13-01-2023 Latest Release v1.0.0',
                            inline: false,
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 