const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const player = client.player.players.get(interaction.guild.id);

    const channel = interaction.member.voice.channel;
    if (!channel) return client.errNormal({
        error: `You're not in a voice channel!`,
        type: 'editreply'
    }, interaction);

    if (player && (channel.id !== player?.voiceChannel)) return client.errNormal({
        error: `You're not in the same voice channel!`,
        type: 'editreply'
    }, interaction);

    if (!player || !player.queue.previous) return client.errNormal({
        error: "There are no songs was played previously",
        type: 'editreply'
    }, interaction);

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
        type: 'editreply'
    }, interaction)

    player.play(player.queue.previous)
}

 