const { RichEmbed } = require('discord.js')
module.exports = {
        name: "say",
        category: "admin",
        description: "relays a message to general!",
        run: async (client, message, args, config, language) => {
            var messagetext = args.slice(0).join(' ');

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return message.reply(`${language.noperms}`)
            }

            if (!config.announcementschannel) {
                return console.log(`${language.noannouncchannel}`)
            }

            if (config.generalchat && message.member.hasPermission("MANAGE_MESSAGES")) {
                var generalchat = message.guild.channels.find(channel => channel.name === `${config.generalchat}`) || message.channel;
                let embed = new RichEmbed()
                .setColor(`${config.color}`)
                .addField(`${language.text}`, `${messagetext}`, true)
                .setTimestamp()
                generalchat.send(embed)
                generalchat.send(`New Message`)
               
            }
        }
    }