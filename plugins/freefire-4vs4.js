let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `╭──────⚔──────╮
ㅤㅤㅤ4 𝐕𝐄𝐑𝐒𝐔𝐒 4
╰──────⚔──────╯
╭──────────────╮
🕓 𝗛𝗢𝗥𝗔: 
│➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: CLK
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│⚜️ ➤ 
│⚜️ ➤ 
╰─────────────╯`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: 4vs4,
body: 4vs4,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/a76519a488755d9dd6097.jpg', 
sourceUrl: ''}}},
{ quoted: fkontak})
}
handler.tags =['info'] 
handler.help = ['codesandbox', 'Servidor', 'Obte'] 
handler.command = /^(sandbox|4vs4|sand|server)$/i
export default handler
