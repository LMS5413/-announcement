const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    let canal =  message.guild.channels.cache.get("772596480166723594")
    let anuncio1 = args[0]
    let anuncio2 = args.slice(1).join(" ")
    if(!anuncio1) return message.reply("Diga o anuncio 1")
    if(!anuncio2) return message.reply("Diga o anuncio 2")

    const embed = new MessageEmbed()
        .setTitle("UPDATE DO BOT")
        .addField("Versão da UPDATE", `${anuncio1}`)
        .addField("UPDATE feito", `${anuncio2}`)
    canal.send('@everyone').then(deletar => {
        deletar.delete({timeout: 1000})
    })
    canal.send(embed)
}
exports.help = {
    name: "update"
}
