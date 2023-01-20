const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `<:noentry:1065941736603537518>┆AFK`,
            value: `</afk help:1063488530157932696>`,
            inline: true
        },
        {
            name: `<:announce:1065916849486823445>┆Announcement`,
            value: `</announcement help:1063488530157932697>`,
            inline: true
        },
        {
            name: `<:mod:1065940560411627520>┆Auto mod`,
            value: `</automod help:1063488530157932698>`,
            inline: true
        },
        {
            name: `<:gear_g:1065914595144892546>┆Auto setup`,
            value: `</autosetup help:1063488530157932699>`,
            inline: true
        },
        {
            name: `🎂┆Birthday`,
            value: `</birthdays help:1063488530157932700>`,
            inline: true
        },
        {
            name: `<:bot:1065939763024101416>┆Bot`,
            value: `</bot help:1063488530157932701>`,
            inline: true
        },
        {
            name: `🎰┆Casino`,
            value: `</casino help:1063488530157932702>`,
            inline: true
        },
        {
            name: `<:gear_g:1065914595144892546>┆Configuration`,
            value: `</config help:1063488530157932704>`,
            inline: true
        },
        {
            name: `<:mob:1065939198441435167>┆Custom commands`,
            value: `</custom-commands help:1063488530157932703>`,
            inline: true
        },
        {
            name: `<:mbag:1065919157490683904>┆Economy`,
            value: `</economy help:1063488530338304041>`,
            inline: true
        },
        {
            name: `👪┆Family`,
            value: `</family help:1063488530338304043>`,
            inline: true
        },
        {
            name: `😂┆Fun`,
            value: `</fun help:1063488530338304044>`,
            inline: true
        },
        {
            name: `🎮┆Games`,
            value: `</games help:1063488530338304045>`,
            inline: true
        },
        {
            name: `<:giveaway:1065918316138483722>┆Giveaway`,
            value: `</giveaway help:1063488530338304046>`,
            inline: true
        },
        {
            name: `<:gear_g:1065914595144892546>┆Guild settings`,
            value: `</guild help:1063488530338304047>`,
            inline: true
        },
        {
            name: `🖼️┆Images`,
            value: `</images help:1063488530338304049>`,
            inline: true
        },
        {
            name: `<:env:1065928694805303356>┆Invites`,
            value: `</invites help:1063488530522841090>`,
            inline: true
        },
        {
            name: `🆙┆Leveling`,
            value: `</levels help:1063488530522841091>`,
            inline: true
        },
        {
            name: `💬┆Messages`,
            value: `</messages help:1063488530522841093>`,
            inline: true
        },
        {
            name: `👔┆Moderation`,
            value: `</moderation help:1063488530522841094>`,
            inline: true
        },
        {
            name: `<:mus:1065931575553957948>┆Music`,
            value: `</music help:1063488530522841095>`,
            inline: true
        },
        {
            name: `👤┆Profile`,
            value: `</profile help:1063488530522841097>`,
            inline: true
        },
        {
            name: `🙂┆Reaction roles`,
            value: `</reactionroles help:1063488530690609237>`,
            inline: true
        },
        {
            name: `🔎┆Search`,
            value: `</search help:1063488530690609239>`,
            inline: true
        },
        {
            name: `📊┆Server stats`,
            value: `</serverstats help:1063488530690609240>`,
            inline: true
        },
        {
            name: `<:gear_g:1065914595144892546>┆Setup`,
            value: `</setup help:1063488530690609241>`,
            inline: true
        },
        {
            name: `<:hadske:1065927841465770084>┆Thanks`,
            value: `</thanks help:1063488530690609245>`,
            inline: true
        },
        {
            name: `<:ticket_green:1065923338326790145>┆Tickets`,
            value: `</tickets help:1063488530690609246>`,
            inline: true
        },
        {
            name: `<:hamtoo:1065922792182255628>┆Tools`,
            value: `</tools help:1063488530862592000>`,
            inline: true
        },
        {
            name: `<:sound_green:1065923813268799498>┆Voice`,
            value: `</voice help:1063488530862592001>`,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('<:pre:1065935660575367168>')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('<:nxt:1065935706029047830>')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setEmoji("<:env:1065928694805303356>")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel("Support server")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                const row2 = new Discord.ActionRowBuilder()
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
                                    emoji: "<:papers:1065947500483182652>",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `<:que:1065895762682187906>・Help panel`,
                    desc: `View all command categories in the bot here! \n\n[Website](https://shorturl.at/iOU69) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                    image: "https://share.creavite.co/WYMlziHH45dOwEb3.gif",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `<:que:1065895762682187906>・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](https://shorturl.at/iOU69) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `<:que:1065895762682187906>・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](https://shorturl.at/iOU69) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 