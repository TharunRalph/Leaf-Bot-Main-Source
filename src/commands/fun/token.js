const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.ml/bottoken?id=${interaction.user.id}`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {

            client.embed({
                title: `<:bot:1065939763024101416>・Bot token`,
                desc: json.token,
                type: 'editreply',
            }, interaction);
        }).catch({})

}

 