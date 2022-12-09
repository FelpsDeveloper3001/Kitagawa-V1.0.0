const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "[📕Info] Veja o ping do bot.",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`<:isignalalt:1050213478499110952> Olá ${interaction.user}, meu ping está em \`calculando...\`.`)
    .setColor("#FF00FF");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`<:isignalalt2:1050213480948580442> Olá ${interaction.user}, meu ping está em \`${ping}ms\`
    <:itimefast:1050216359142903848> Demorei exatos \`${(Date.now() - interaction.createdTimestamp) / 5**(1)}ms\`para responder a sua mensagem.` )
    .setColor("#FF00FF");

    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}