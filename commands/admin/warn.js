const { RichEmbed } = require('discord.js')
module.exports = {
        name: "warn",
        category: "admin",
        description: "Warn a member",
        run: async (client, message, args, config, language) => {
            await message.delete()
            const logerchannel = message.guild.channels.find(channel => channel.name === `${config.logchannel}`) || message.channel;

            if (!args[0]){
                return message.reply(`${language.mention}`)
            }

            if (args[1]) {
                let reason = `${args.slice(1).join(" ")}`
            }

            if (!args[1]) {
                let reason = `${language.noreason} | by <@${message.author.id}>`
            }

            if (!message.member.hasPermission("KICK_MEMBERS")) {
                return message.reply(`${language.noperms}`)
            }
            
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
                return message.reply(`${language.botnoperms}`)
            }

            const warned = message.mentions.users.first() || message.guild.members.get(args[0]);

            if (!warned) {
                return message.reply(`${language.memnotfound}`)
            }

            if (warned === message.author.id) {
                return message.reply(`${language.warnyourself}`)
            }

            if (!warned.warnable) {
                return message.reply(`${language.notbannable}`)
            }

                const embed = new RichEmbed()
                .setAuthor(`${config.shortname} Warns`)
                .setColor(`${config.color}`)
                .setThumbnail(`${config.logo}`)
                .setFooter(`Bot ${language.madeby}`)
                .setDescription(`Warn : ${reason}}`)
                .addField(`User Warned`, `${warned} | ${warned.id}`)
                .addField(`Warned by`, `${message.author.username} | ${message.author.id}`)
                await logchannel.send(embed).then(async warned => {
                    await warned.warn(`${reason}}`)
                    if (error) return logerchannel.send(`${throwerr} ${error}`)
                })
            }
        }
