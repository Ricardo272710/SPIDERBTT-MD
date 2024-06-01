let handler = (m) => m;
handler.all = async function (m) {


  if (/^Diegol|Diego|Diego|Diego|Diego|Diegol$/i.test(m.text)) {
    var ax = `Diego el mejor programador @${global.suittag=573012482597} Te a invocado`;


    m.reply(ax, m.chat, { mentions: conn.parseMention(ax)}); 
  return !0
}}
export default handler
