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

global.destino = ['Piensa siempre a lo positivo', 'Solo confía en ti mismo', 'Con dios todo se puede', 'No andes en malo pasos'];
