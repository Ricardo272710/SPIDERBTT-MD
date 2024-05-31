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

global.destino = ['Pronto serás rico', 'Con dios todo se puede', 'Solo confía en ti mismo'];
