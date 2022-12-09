const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.login(config.token);
client.on('ready', () => {
    console.clear() 
	console.log(`✅  | Bot logado com Sucesso.
✅  | Kitagawa#6886
✅  | Sistema atualizado V1.0.0`);
    client.user.setActivity(`❤️Kitagawa `);
});


client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})
module.exports = client;

client.slashCommands = new Discord.Collection();
require('./handler')(client);


client.on('interactionCreate', async interaction => {

  if (interaction.isButton()) {
    if (interaction.customId.startsWith("botao_modal")) {
      const modal = new Discord.ModalBuilder()
        .setCustomId('modal_sugestao')
        .setTitle(`Olá usuário, Nos diga qual é a sua sugestão.`)
      const sugestao3 = new Discord.TextInputBuilder()
        .setCustomId('sugestão')
        .setLabel('Qual sua sugestão?')
        .setStyle(Discord.TextInputStyle.Paragraph)

      const firstActionRow = new Discord.ActionRowBuilder().addComponents(sugestao3);
      modal.addComponents(firstActionRow)
      await interaction.showModal(modal);

      interaction.followUp({
        content: `<:warnvn:1042957287301586945> ${interaction.user}, Não abuse dessa função, caso contrario poderá e irá resultar em banimento.`,
        ephemeral: true
      })

    }
  }
  //

  if (!interaction.isModalSubmit()) return;
  if (interaction.customId === 'modal_sugestao') {
    const moment = require("moment")
    let channel = client.channels.cache.get('984656053516009492') //canal para o envio da sugestão.
    const sugestao2 = interaction.fields.getTextInputValue('sugestão');

    interaction.reply({
      content: `<:onvc:1042957286240419840> ${interaction.user}, Sua sugestão foi enviada com sucesso!`, ephemeral: true
    })

    channel.send({
      embeds: [new Discord.EmbedBuilder()
        .setColor('#FF00FF')
        .setAuthor({ name: `👤 - ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dinamyc: true }) })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL({ dinamyc: true }) })
        .setThumbnail(interaction.user.displayAvatarURL({ format: "png", dinamyc: true, size: 4096 }))
        .setDescription(`**<:timervn:1042957284713713714> Horário da sugestão:**
<t:${moment(interaction.createdTimestamp).unix()}>(<t:${parseInt(interaction.createdTimestamp / 1000)}:R>)

**<:infos:1002997915884720159> Sobre o usuário:**

**<:idname:1002993291354198056> ID:** (\`${interaction.user.id}\`)
**<:idname:1002993291354198056> Usuario que fez a sugestão:** ${interaction.user}
**<:idname:1002993291354198056> Nome no discord:** \`${interaction.user.tag}\`

**Sugestão:**
\`\`\`${sugestao2}\`\`\``)
      ]
    })
  }
})


process.on('unhandRejection', (reason, promise) => {
  console.log(`🚨 | [Erro]\n\n` + reason, promise);
});
process.on('uncaughtException', (error, origin) => {
  console.log(`🚨 | [Erro]\n\n` + error, origin);
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`🚨 | [Erro]\n\n` + error, origin);
});