const { RichEmbed } = require('discord.js')
const dig = require('gamedig')
module.exports = {
    name: "tinfo",
    category: "server",
    description: "Get information on the Test Server!",
    run: async(client, message, args, config, language) => {
        await message.delete();
        return dig.query({
            type: 'fivem',
            host: config.thost,
            port: config.tport,
            socketTimeout: 5000,
            udpTimeout: 10000
        }).then((info) => {
            const embed = new RichEmbed()
                .setAuthor(info.name)
                .setColor(config.color)
                .addField(`Password protected?`, info.password, true)
                .addField(`Online`, `${info.raw.clients}/${info.raw.sv_maxclients}`, true)
                .addField(`IP`, `${config.ip}:${config.port}`)
                .setThumbnail(config.logo)
            message.channel.send(embed)
        }).catch((error) => {
            message.reply(`I'm sorry, but SecretSociety Role Play Test Server is **offline**`)

        })
    }
}
