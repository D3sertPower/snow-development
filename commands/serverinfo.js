if(comando === "serverinfo"){

    let serverembed = new Discord.RichEmbed()
    .setTitle("Informação do server")
    .setColor("0ED4DA")
    .setThumbnail(message.guild.iconURL)
    .addField('Nome', `${message.guild.name} (${message.guild.nameAcronym})`, true)
    .addField('Dono Do Server', message.guild.owner.user.tag, true)
    .addField("Quando o server foi criado:", message.guild.createdAt, true)
    .addField("Membros Do Server", message.guild.memberCount, true)
  
    return message.channel.send(serverembed);
  }
  
  
  module.exports.help = {
    name: "serverinfo",
    description: "informação sobre, o server"
  } 