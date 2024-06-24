let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Ese es mi propietario.`
await conn.sendButton(m.chat, text, `🧸 ¿Comó estás? ` + nombre, foto,[
['ꨄ Menu', '!allmenu'],
['ꨄ Goku-Black-Bot-MD 🌹', '!sc'],
['ꨄ Desarolladores ✨', '#owner'],
['ꨄ Goku-Black-Bot-MD💥', '.bot Hola']], null, [
['ꨄ Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Elias|Eliass/i;
handler.command = new RegExp;
export default handler;