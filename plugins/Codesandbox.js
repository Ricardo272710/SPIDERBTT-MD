let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = ``PARA LOS QUE QUIERAN PATROCINARNOS EN SUS PROYECTOS:`

*✨ HOLA BIENVENIDO/A TE PRESENTO ~CODESANDBOX~*

*¿QUE ES CODESANDBOX?*
_PLATAFORMA DONDE PUEDES ALOJAR MÚLTIPLES PROYECTOS A LARGO ALCANZE CON MUCHOS IDIOMAS Y CUSTOMIZADO_

*¿QUE VENTAJAS TIENE Y QUE DIFERENCIA DE OTROS HOTS?*
_LA DIFERENCIA ES QUE LA MAYORIA DE HOST MANTIENEN SOLO LOS LENGUAJES DE PROGRAMACION HABITUALES COMO "JAVASCRIPT" - "HTML" - "PYTHON" ADEMAS DE QUE ESTOS PUEDEN COSTAR UN CIERTO COSTO Y/O ALCANCE ADEMAS DE QUE NO PUEDES ALOJAR TANTOS DEBIDO A ALGUNA LIMITACIÓN O SU DEBIDO DINERO._

_CODESANDBOX ES UN LUGAR GRATUITO DONDE TAMBIÉN ADEMAS DE QUE TENGAS UNA CUENTA, PUEDES CONECTAR TUS PROYECTOS PRIVADOS/PUBLICOS DE GITHUB, AMPLIO SISTEMA DE SOPORTE Y CUSTOMIZACION_

_🌟 CONTAMOS CON SOPORTE GARANTIZADO Y EXTRA_

_CONTAMOS CON AMPLIA VARIEDAD DE FORMATOS O LENGUAJES COMO PHP / PYTHON / JAVA / JAVASCRIPT / TYPESCRIPT / REACT / ANGULAR / ETC_

*¿PUEDO LLEGAR A PAGARLO O OBTENER OTRAS FUNCIONES?*
_SI, CONTAMOS CON UNA VERSION "VIP" O "PRO" EL CUAL PERMITE AL USUARIO  USAR LENGUAJES PERZONALIZADOS O DIRECTAMENTE CARGAR SU PROPIO SISTEMA DE LENGUAJE Y UN PROPIO LUGAR DONDE PODRAS TENER TUS PROYECTOS Y SISTEMA PRIVADOS CON MAS FUNCIONES._

*¿COMO PUEDO INICIAR?*
_INICIAS O ALOJAS DE FORMA GRATUITA CON 4GB DE ESPACIO PARA CUALQUIER ESPECIALIDAD Y SI QUIERES AUMENTARLO ES PAGANDO DE FORMA VIP O EN SORTEOS OFICIALES_

*_PAGINA_*
_https://codesandbox.io/dashboard_

*_CANAL DE WHATSAPP_*
_https://whatsapp.com/channel/0029VagAcYlGE56u6WANKc2w_

*_CREADOR_*
_wa.me/5493795319022_

*_PAGOS PARA EL VIP_*
_wa.me/5493795297363_
 🌟 𝘽𝙮 𝙄𝙫𝙖𝙣 𝙈𝙤𝙙`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(Servidor|hostt|Lento|Boox|Precios|Rapido|Code|sand)/i
export default handler