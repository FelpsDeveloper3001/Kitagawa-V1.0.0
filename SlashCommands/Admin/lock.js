const Discord = require("discord.js")

module.exports = {
    name: "lock",
    description: "[🔰Admin] Tranque um canal",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
            interaction.reply(`<:ix:1050256261595279460> Você não possui a permissão \`Genrenciar Canais\` para poder uttilizar este comando.`)
        } else {
            let embed = new Discord.EmbedBuilder()
                .setTitle("Canal trancado!")
                .setColor('#FF00FF')
                .addFields({name: `<:ilock:1050256061153693769> Este canal foi trancado, apenas staffs podem escrever aqui!`, value: `<:iuser:1050256225826263050> Trancado por: ${interaction.user}`})
                interaction.reply({ embeds: [embed] }).then(msg => {
                interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false }).catch(e => {
                    console.log(e)
                    interaction.editReply(`<:ix:1050256261595279460> Ops, algo deu errado ao tentar trancar este canal.`)
                })
            })
        }
    }    
}