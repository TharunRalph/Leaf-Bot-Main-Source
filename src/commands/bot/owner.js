const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `<Ralph_0>`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@981063126604730388>`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Leaf 🍀`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://shorturl.at/iOU69`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 