//import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let { generateWAMessageFromContent } = (await import(global.baileys)).default 
let handler  = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let texto = `*AXX🇵🇪 IVAN🇵🇾 MATIAS🇦🇷 ENZO🇦🇷 JOSTIN🇪🇨*` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'axel🍆', body: null, thumbnail: imagen1, sourceUrl: '' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(Pais)/i
handler.register = true
export default handler