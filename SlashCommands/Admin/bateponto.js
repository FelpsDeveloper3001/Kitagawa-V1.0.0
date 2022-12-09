const Discord = require("discord.js")
const moment = require("moment")
const { ApplicationCommandType, ActionRowBuilder, EmbedBuilder, ComponentType } = require('discord.js');


module.exports = {
    name: "bate-ponto",
    description: "[🔰Admin] Bata Seu Ponto",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, options, message) => {
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator))
        return interaction.reply({ content: `**<:ix:1050256261595279460> - Você não tem permissão para utilizar este comando!**`, ephemeral: true })


        var canal = client.channels.cache.get(interaction.channel.id)
        interaction.reply('.').then(msg => interaction.deleteReply())
        let terminar = new ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
                .setCustomId("terminar")
                .setLabel("Finalizar")
                .setStyle("Danger")
        )

        let embed = new EmbedBuilder()
            .setAuthor({ name: "Ponto iniciado" })
            .setThumbnail(interaction.user.displayAvatarURL({ format: "png", dinamyc: true, size: 4096 }))
            .setFields(
                { name: "<:iuser:1050256225826263050> Usuário:", value: `${interaction.user.username}\n> ${interaction.user.id}`, inline: false },
                { name: "<:ibusinesstime:1050256055357149285> Data/Horário:", value: `<t:${moment(interaction.createdTimestamp).unix()}>(<t:${parseInt(interaction.createdTimestamp / 1000)}:R>)`, inline: true },
                { name: "**<:iquestion:1050256065595453524> Informações:**", value: 'Bate ponto ainda não foi finalizado', inline: true },
            )
            .setColor("#FF00FF")
        const msg = await canal.send({ embeds: [embed], components: [terminar] })

        const collector = msg.createMessageComponentCollector({ componentType: ComponentType.Button })

        collector.on('collect', async (i) => {

            if (i.user.id != interaction.user.id) return collected.reply({ content: `<:ix:1050256261595279460> \`|\` **Somente a pessoa que executou o comando (\`${interaction.user.tag}\`) pode interagir com ele.**`, ephemeral: true });

            if (i.customId === "terminar") {
                const terminou = new EmbedBuilder()
                    .setAuthor({ name: "Ponto encerrado" })
                    .setThumbnail(interaction.user.displayAvatarURL({ format: "png", dinamyc: true, size: 4096 }))
                    .setFields(
                        { name: "<:iuser:1050256225826263050> Usuário:", value: `${interaction.user.username}\n> ${interaction.user.id}`, inline: false },
                        { name: "<:ibusinesstime:1050256055357149285> Data/Horário:", value: `<t:${moment(interaction.createdTimestamp).unix()}>(<t:${parseInt(interaction.createdTimestamp / 1000)}:R>)`, inline: true },
                        { name: "**<:iquestion:1050256065595453524> Informações:**", value: 'Bate ponto Finalizado', inline: true },
                    )
                    .setColor("#FF00FF")
                i.update({
                    embeds: [terminou],
                    components: []
                })
            }
        })
    }
};