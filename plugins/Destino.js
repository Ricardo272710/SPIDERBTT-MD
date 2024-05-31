const handler = async (m, {conn, text}) => {
  m.reply(`*TU DESTINO SERA*
 ${pickRandom(global.destino)}`);
};
handler.tags = ['Destino'];
handler.command = ['destino'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.destino = ['PRONTO SERAS RICO', 'Todo se puede'];
