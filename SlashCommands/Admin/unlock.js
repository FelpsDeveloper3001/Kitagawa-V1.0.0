const Discord = require("discord.js")
//vendo script e bot no pv 
module.exports = {
    name: "unlock", 
    description: "[🔰Admin] Abra um canal.",
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async(client, interaction) => {
        if (!interaction.member.permissions.has("ManageChannels")) {
            interaction.reply(`<:ix:1050256261595279460> Você não possui a permissão \`Gerenciar Canais\` para poder uttilizar este comando.`)
        } else {
            let destrancar = new Discord.EmbedBuilder()
            .setTitle("Canal destrancado !")
            .addFields({name: `<:iunlock:1050256344638312550> Esse canal foi destrancado, agora todos podem digitar novamente.`, value: `<:iuser:1050256225826263050> Destrancado por: ${interaction.user}`})
            .setColor('#FF00FF')
            interaction.reply({embeds: [destrancar]}).then(msg => { 
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true }).catch(e => {
                console.log(e)
            
                msg.edit(`<:ix:1050256261595279460> Ops, algo deu errado ao tentar destrancar este chat.`)
            })
        })

            }
        }        
}