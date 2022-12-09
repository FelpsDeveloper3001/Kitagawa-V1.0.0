const Discord = require("discord.js")

module.exports = {

    name: "avatar", // Coloque o nome do comando
  
    description: "Veja o avatar de algum usuario.", // Coloque a descrição do comando
  
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
      {
        name: "usuario",
        description: "Mencione um usuario ou o id dele",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
      },
    ],
    run: async (client, interaction) => {
  
      let user = interaction.options.getUser("usuario")
      let userAvatar = user.displayAvatarURL({ size: 4096, dynamic: true, format: "gif" })
  
  
      
      let embed = new Discord.EmbedBuilder()
      .setColor(0x007DFF)
      .setImage(userAvatar)
  
      interaction.reply({ embeds: [embed], ephemeral: true})
    }
  
  }