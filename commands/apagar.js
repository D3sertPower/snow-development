if(comando === "apagar") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

      if(!message.member.roles.some(r=>["[CO-DIRETOR]", "[DIRETOR]", "[ADM]", "[EDITOR FODASTICO]"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
      
      

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
      message.reply(`Chat limpo com sucesso`)
  }