var handler = async (m, { conn, command }) => {

let str = `*👑 Gracias por apoyar este bot*
*✨ Gracias a tu colaboración 🪙 el bot* seguira en constantes actualizaciónes mejoradas 🎨, puede comprar servidores tambien, 🟢 funcionalidad, 👥 grupos con bot, ✅ rapido y seguro, 🤖 bot en 24/7, 🌍 precios aceptables, 🍷 mas funciones solo lo podras encontrar en: 🌌 \`𝙶𝚘𝚔𝚞-𝙱𝚕𝚊𝚌𝚔-𝙱𝚘𝚝-𝙼𝙳\` 🌌

*Puedes Donarme números también*

*\`Mandar pruebas en captura:\`*
> https://wa.me/595972157130`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
