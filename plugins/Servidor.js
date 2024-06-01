let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `PARA LOS QUE QUIERAN PATROCINARNOS EN SUS PROYECTOS

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
*\`🍁 Te presentamos un nuevo server: "codesandbox"\`*

*¿Muy lento tu Samsung J1 y necesitas tener activo tu bot 24/7?*

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
https://whatsapp.com/channel/0029VaanL8K4yltYHri0ea3K

📱 *Contacto*
wa.me/5493794297363`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🍁 CODESANDBOX 🍁`,
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
