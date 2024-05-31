const handler = async (m, {conn, text}) => {
  m.reply(`*Consejos que te ayudarán*
 ${pickRandom(global.destino)}`);
};
handler.tags = ['Destino'];
handler.command = ['destino'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.destino = ['Pronto serás rico', 'Solo confía en ti mismo', 'Con dios todo se puede'];
