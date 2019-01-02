const Discord = require("discord.js");
exports.run = async (bot, message, args) => {

let avatar = bot.user.displayAvatarURL;
const embed = new Discord.RichEmbed()
.setColor("#9842f4")
.setThumbnail(avatar)
.setTimestamp()
.setTitle("Botinfo")
.addField("Nome do bot:", bot.user.username)
.addField("TAG do Bot:", `#${bot.user.discriminator}`)
.addField("ID do Bot:", bot.user.id)
.addField("Criado as:", bot.user.createdAt)
message.channel.send(embed)
}