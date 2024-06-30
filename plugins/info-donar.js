var handler = async (m, { conn, command }) => {

let str = `*SPIDER 𝗕𝗼𝘁 🐉\n\n 𝗣𝗼𝗿 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗔𝗽𝗼𝘆𝗮𝗿 , 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗔𝗹𝗴𝘂𝗻 𝗦𝗲𝗿𝘃𝗲𝗿 , 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗕𝗼𝘁 𝗢 𝗧𝗯𝗺 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 metodos de apoyar 𝗘𝘀 :
✅PAYPAL
https://paypal.me/RicardoSilva18160

 *BANCO PICHINCHA* 
 Cta ahorro 
3910143100
Ricardo Silva*

YAPPY PANAMA : 67712442*

*NEQUI PANAMÁ :* 65197283*`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
