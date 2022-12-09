const Discord = require("discord.js");

module.exports = {
    name: "userinfo",
    description: "Veja informações de algum usuario",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "ID ou Menção do usuario",
            type: Discord.ApplicationCommandOptionType.User,
            require: true,
        }
    ],
    run: async (client, interaction) => {

        let user = interaction.options.getUser("user")

        let ryan = new Discord.EmbedBuilder()
            .setColor("#FF00FF")
            .setTitle(`${user.username}`)
            .setThumbnail(user.displayAvatarURL({ format: "png", dinamyc: true, size: 4096 }))
            .addFields(
                {
                    name: `<:iuser:1050256225826263050> Nome`,
                    value: `\`\`\`${user.tag}\`\`\``,
                    inline: true,
                },
                {
                    name: `<:ifingerprint:1050256058154745868> Identidade`,
                    value: `\`\`\`${user.id}\`\`\``,
                    inline: true,
                },
                {
                    name: `<:imegaphone:1050256062684606514> Menção`,
                    value: `${user}`,
                    inline: true,
                },
                {
                    name: `<:iuser:1050256225826263050> Conta criada`,
                    value: `<t:${~~(user.createdTimestamp / 1000)}:f> (<t:${~~(user.createdTimestamp / 1000)}:R>)`,
                    inline: false,
                },
        )
        interaction.reply({ embeds: [ryan] })
    }
}