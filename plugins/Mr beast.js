const handler = async (m, {conn}) => {
  m.reply(global.millon);
  m.reply(global.millon);
};
handler.command = /^(Rico|Millon|ser)$/i;
export default handler;

global.millon = `*Felicitaciones te haz ganado 1M de Dólares* 
*Pasa tu paypal y te desposito*
_*atte:Mr Beast*_`;
