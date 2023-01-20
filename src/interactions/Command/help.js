const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
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

        return client.embed({
            title: `<:que:1065895762682187906>| Help Panel`,
            desc: `Welcome to Bot's help panel! We have made a small overview to help you! Make a choice via the menu below`,
            image: "https://share.creavite.co/WYMlziHH45dOwEb3.gif",
            fields: [
                {
                    name: `<:kross:1065897195406110750>┆Menu doesn't work?`,
                    value: `Try resending the command. If you get no reaction, make sure you report the bug!`
                },
                {
                    name: `<:bugs:1065897707937464331>┆Found a bug?`,
                    value: `Report this with </report:1063488530690609238>`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 