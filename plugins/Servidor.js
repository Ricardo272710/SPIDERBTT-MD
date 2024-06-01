let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*\`🍁 Te presentamos un nuevo server: "codesandbox"\`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para que tengas activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

Contamos con:

Plan: Free
Para: Todos usuarios

Plan: Pro
Para: Usuarios que paguen
Precio: 12$ USD

Plan: Enterprise - Empresas
Para: Empresas
Precio: Solo acordado y dado por el creador nada mas

🔵 \`\`\`Información del Server\`\`\`

💻 *Página:*
https://codesandbox.io/dashboard

💙 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaanL8K4yltYHri0ea3K`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🌻 CODESANDBOX 🍁`,
body: `✔️ Servidor de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/37478c04c4abeb4d02f80.jpg', 
sourceUrl: 'https://whatsapp.com/channel/0029VaanL8K4yltYHri0ea3K'}}},
{ quoted: fkontak})
}
handler.tags =['info'] 
handler.help = ['codesandbox', 'Servidor', 'Obte'] 
handler.command = /^(sandbox|box|sand|server)$/i
export default handler
