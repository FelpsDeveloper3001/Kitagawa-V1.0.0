const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Veja as informações do servidor",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "id",
            description: "Cole o ID do servidor",
            type: Discord.ApplicationCommandOptionType.String,
            require: true,
        }
    ],
    run: async (client, interaction) => {

        let membros = interaction.guild.memberCount;
        let cargos = interaction.guild.roles.cache.size;
        let canais = interaction.guild.channels.cache.size;
        let entrou = interaction.guild.joinedTimestamp;
        let servidor = interaction.guild;
        let donoid = interaction.guild.ownerId;
        let emojis = interaction.guild.emojis.cache.size;
        let serverid = interaction.options.getString("id")
        let impulsos = interaction.guild.premiumSubscriptionCount;
        let data = interaction.guild.createdAt.toLocaleDateString("pt-br");


        let ryan = new Discord.EmbedBuilder()
            .setColor("#FF00FF")
            .setThumbnail(interaction.guild.iconURL({ dinamyc: true, format: "png", size: 4096 }))
            .setTitle(`Informações do servidor: ${interaction.guild}`)
            .addFields(
                {
                    name: `<:ifingerprint:1050256058154745868> Identidade`,
                    value: `\`\`\`${serverid}\`\`\``,
                    inline: true,
                },
                {
                    name: `<:ihastag:1050256059736002691> Canais em geral:`,
                    value: `<:ihastag:1050256059736002691> Canais: ${canais}\n<:ihastag:1050256059736002691> Cargos: ${cargos}`,
                    inline: true,
                },
                {
                    name: `<:iuser:1050256225826263050> Usuarios`,
                    value: `\`\`\`${membros} membros\`\`\``,
                    inline: true,
                },
                {
                    name: `<:ibusinesstime:1050256055357149285> Servidor criado`,
                    value: `<t:${parseInt(interaction.guild.createdTimestamp / 1000)}>`,
                    inline: true,
                },
                {
                    name: `🚀 ${interaction.user.username} entrou em `,
                    value: `<t:${parseInt(servidor.joinedTimestamp / 1000)}:F>`,
                    inline: true,
                },
                {
                    name: `<:icrown:1050256057068437574> Dono`,
                    value: `<@!${donoid}> \n\`\`${donoid}\`\``,
                    inline: true,
                }
        )
        
        
        
        
        interaction.reply({ embeds: [ryan] })
    }
}