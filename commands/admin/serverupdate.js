const { RichEmbed } = require('discord.js')
module.exports = {
        name: "supdate",
        category: "admin",
        description: "Sends a server update",
        run: async (client, message, args, config, language) => {
            var messagetext = args.slice(0).join(' ');

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return message.reply(`${language.noperms}`)
            }

            if (!config.serverupdateschannel) {
                return console.log(`${language.noannouncchannel}`)
            }

            if (config.serverupdateschannel && message.member.hasPermission("MANAGE_MESSAGES")) {
                var serverupdateschannel = message.guild.channels.find(channel => channel.name === `${config.serverupdateschannel}`) || message.channel;
                let embed = new RichEmbed()
                .setAuthor(`${language.aufrom} ${message.author.username}`)
                .setColor(`${config.color}`)
                .addField(`${language.text}`, `${messagetext}`, true)
                .setTimestamp()
                announcchannel.send(embed)
                announcchannel.send(`@ServerUpdates`)
               
            }
        }
    }