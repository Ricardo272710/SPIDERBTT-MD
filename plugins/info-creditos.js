var handler = async (m) => {

let tqto = `🚩 *Desarrollador*
⬡ *Ivan*`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Del creador*

⬡ https://github.com/elias1524

_NO TE OLVIDES DE SEGUIRME Y DEJARME UNA 🌟 AL REPO_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Del Creador* 

⬡ *IVAN - CREADOR*
@595972157130

⬡ *HJ*
@524437863111

⬡ *Ender*
@50558124470

⬡ *Jxjxn17*
@51929972576`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
