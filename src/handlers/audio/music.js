const Discord = require('discord.js');
const Voice = require('@discordjs/voice');

module.exports = (client) => {
    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (interaction.isButton()) {
            if (interaction.customId == "Bot-musicpause") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.pause(true)

                const embedData = interaction.message.embeds[0];

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.previous)
                            .setCustomId("Bot-musicprev")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.play)
                            .setCustomId("Bot-musicstart")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.stop)
                            .setCustomId("Bot-musicstop")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.next)
                            .setCustomId("Bot-musicnext")
                            .setStyle(Discord.ButtonStyle.Secondary),
                    );

                client.embed({
                    title: embedData.title,
                    url: embedData.url,
                    desc: `Music is currently paused`,
                    thumbnail: embedData.thumbnail.url,
                    fields: embedData.fields,
                    components: [row],
                    color: client.config.colors.error,
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "Bot-musicstart") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.pause(false)

                const embedData = interaction.message.embeds[0];

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.previous)
                            .setCustomId("Bot-musicprev")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.pause)
                            .setCustomId("Bot-musicpause")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.stop)
                            .setCustomId("Bot-musicstop")
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setEmoji(client.emotes.music.next)
                            .setCustomId("Bot-musicnext")
                            .setStyle(Discord.ButtonStyle.Secondary),
                    );

                client.embed({
                    title: embedData.title,
                    url: embedData.url,
                    desc: `Music is currently resumed`,
                    thumbnail: embedData.thumbnail.url,
                    fields: embedData.fields,
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "Bot-musicstop") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.destroy();

                client.embed({
                    desc: `Music is currently stopped`,
                    color: client.config.colors.error,
                    components: [],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "Bot-musicnext") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.stop();

                const track = player.queue.current;

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setEmoji("<:pre:1065935660575367168>")
                            .setCustomId("Bot-musicprev")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:pse:1065935758738857994>")
                            .setCustomId("Bot-musicpause")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:stp:1065935804800712724>")
                            .setCustomId("Bot-musicstop")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:nxt:1065935706029047830>")
                            .setCustomId("Bot-musicnext")
                            .setStyle(Discord.ButtonStyle.Primary),
                    );

                client.embed({
                    title: `${client.emotes.normal.music}・${track.title}`,
                    url: track.uri,
                    desc: `Music started in <#${player.voiceChannel}>!`,
                    thumbnail: track.thumbnail,
                    fields: [
                        {
                            name: `👤┆Requested By`,
                            value: `${track.requester}`,
                            inline: true
                        },
                        {
                            name: `${client.emotes.normal.clock}┆Ends at`,
                            value: `<t:${((Date.now() / 1000) + (track.duration / 1000)).toFixed(0)}:f>`,
                            inline: true
                        },
                        {
                            name: `🎬┆Author`,
                            value: `${track.author}`,
                            inline: true
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "Bot-musicprev") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player || !player.queue.previous) return;

                const track = player.queue.previous;

                let row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setEmoji("<:pre:1065935660575367168>")
                            .setCustomId("Bot-musicprev")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:pse:1065935758738857994>")
                            .setCustomId("Bot-musicpause")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:stp:1065935804800712724>")
                            .setCustomId("Bot-musicstop")
                            .setStyle(Discord.ButtonStyle.Primary),

                        new Discord.ButtonBuilder()
                            .setEmoji("<:nxt:1065935706029047830>")
                            .setCustomId("Bot-musicnext")
                            .setStyle(Discord.ButtonStyle.Primary),
                    );

                client.embed({
                    title: `${client.emotes.normal.music}・${track.title}`,
                    url: track.uri,
                    desc: `Music started in <#${player.voiceChannel}>!`,
                    thumbnail: track.thumbnail,
                    fields: [
                        {
                            name: `👤┆Requested By`,
                            value: `${track.requester}`,
                            inline: true
                        },
                        {
                            name: `${client.emotes.normal.clock}┆Ends at`,
                            value: `<t:${((Date.now() / 1000) + (track.duration / 1000)).toFixed(0)}:f>`,
                            inline: true
                        },
                        {
                            name: `🎬┆Author`,
                            value: `${track.author}`,
                            inline: true
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)

                player.play(player.queue.previous)
            }
        }
    }).setMaxListeners(0);
}

 