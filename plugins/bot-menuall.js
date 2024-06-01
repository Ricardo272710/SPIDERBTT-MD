import { promises } from 'fs' 
import { join } from 'path' 
import fetch from 'node-fetch' 
import { xpRange } from '../lib/levelling.js' 

  let tags = { 
  'main': '𝐈 𝐍 𝐅 𝐎', 
  'bot': '𝐁 𝐎 𝐓', 
  'juegos': '𝐉 𝐔 𝐄 𝐆 𝐎 𝐒', 
  'imagenes': '𝐈 𝐌 𝐀 𝐆 𝐄 𝐍 𝐄 𝐒', 
  'grupo': '𝐆 𝐑 𝐔 𝐏 𝐎 𝐒', 
  'frases': '𝐅 𝐑 𝐀 𝐒 𝐄 𝐒', 
  'descargas': '𝐃 𝐄 𝐒 𝐂 𝐀 𝐑 𝐆 𝐀 𝐒', 
  'nable': '𝐎 𝐍 / 𝐎 𝐅 𝐅', 
  'internet': '𝐈 𝐍 𝐓 𝐄 𝐑 𝐍 𝐄 𝐓', 
  'anime': '𝐀 𝐍 𝐈 𝐌 𝐄', 
  'nable': '𝐎 𝐍 - 𝐎 𝐅 𝐅', 
  'premium': '𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌', 
  'downloader': '𝐃 𝐄 𝐒 𝐂 𝐀 𝐑 𝐆 𝐀 𝐒', 
  'info': '𝐈 𝐍 𝐅 𝐎', 
  'owner': '𝐎 𝐖 𝐍 𝐄 𝐑', 
  'nsfw': '𝐍 𝐒 𝐅 𝐖', 
  'database': '𝐃 𝐀 𝐓 𝐀 𝐁 𝐀 𝐒 𝐄',
  'rg': '𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎',
  'tools': '𝐇 𝐄 𝐑 𝐑 𝐀 𝐌 𝐈 𝐄 𝐍 𝐓 𝐀 𝐒', 
  'xp': '𝐄 𝐗 𝐏',
  'imagene': '𝐈 𝐌 𝐀 𝐆 𝐄 𝐍 𝐄 𝐒',
  'transformador': '𝐂 𝐎 𝐍 𝐕 𝐄 𝐑 𝐓 𝐈 𝐃 𝐎 𝐑 𝐄 𝐒',
  'audio': '𝐀 𝐔 𝐃 𝐈 𝐎',
  'sticker': '𝐒 𝐓 𝐈 𝐂 𝐊 𝐄 𝐑 𝐒', 
  'ai': '𝐈 𝐀',
  'rpg': '𝐑 𝐏 𝐆',
  'jadibot': '𝐒 𝐔 𝐁 - 𝐁 𝐎 𝐓',
  'menu': '𝐌 𝐄 𝐍 𝐔',
  'own': '𝐎 𝐖 𝐍 𝐄 𝐑',
} 

const defaultMenu = { 
  before: `
╭════ ＩＮＦＯＢＯＴ ══════════ ⪩
│╭─────────────────
││◉ *Vᴇʀɪғɪᴄᴀᴅᴏs* : %totalreg
││◉ *Rᴜɴᴛɪᴍᴇ* : %uptime
││◉ *Oᴡɴᴇʀ* : %author
│╰─────────────────
╰─══════════════ ⪩

╭─═════ ＵＳＥＲ ═════════ ⪩
│╭─────────────────
││◉ *Nᴏᴍʙʀᴇ* : %name
││◉ *Exᴘ* : %exp
││◉ *Cᴏɪɴs* : %limit
││◉ *Nɪᴠᴇʟ* : %level
│╰─────────────────
╰─══════════════ ⪩
%readmore 
         *乂 ⺀ ʟɪꜱᴛᴀ - ᴄᴏᴍᴀɴᴅᴏꜱ ⺀ 乂* 
`.trimStart(), 
  header: '╭⁺₊⋆•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙ %category ⁺₊⋆•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙╮\n> ╭～●～●～●●～●～', 
  body: '> │➻ *%cmd*\n', 
  footer: '> ╰～●～●～●●～●～\n╰═• ೋ✧๑🌟️๑✧ೋ ≪•◦ ❈ ◦•≫╯', 
  after: '', 
} 

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => { 
  try { 
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {} 
    let { exp, limit, level } = global.db.data.users[m.sender] 
    let { min, xp, max } = xpRange(level, global.multiplier) 
    let name = await conn.getName(m.sender) 
    let d = new Date(new Date + 3600000) 
    let locale = 'es' 
    // d.getTimeZoneOffset() 
    // Offset -420 is 18.00 
    // Offset    0 is  0.00 
    // Offset  420 is  7.00 
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5] 
    let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
    let date = d.toLocaleDateString(locale, { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }) 
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(d) 
    let time = d.toLocaleTimeString(locale, { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' 
    }) 
    let _uptime = process.uptime() * 1000 
    let _muptime 
    if (process.send) { 
      process.send('uptime') 
      _muptime = await new Promise(resolve => { 
        process.once('message', resolve) 
        setTimeout(resolve, 1000) 
      }) * 1000 
    } 
    let muptime = clockString(_muptime) 
    let uptime = clockString(_uptime) 
    let totalreg = Object.keys(global.db.data.users).length 
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => { 
      return { 
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help], 
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags], 
        prefix: 'customPrefix' in plugin, 
        limit: plugin.limit, 
        premium: plugin.premium, 
        enabled: !plugin.disabled, 
      } 
    }) 
    for (let plugin of help) 
      if (plugin && 'tags' in plugin) 
        for (let tag of plugin.tags) 
          if (!(tag in tags) && tag) tags[tag] = tag 
    conn.menu = conn.menu ? conn.menu : {} 
    let before = conn.menu.before || defaultMenu.before 
    let header = conn.menu.header || defaultMenu.header 
    let body = conn.menu.body || defaultMenu.body 
    let footer = conn.menu.footer || defaultMenu.footer 
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after 
    let _text = [ 
      before, 
      ...Object.keys(tags).map(tag => { 
        return header.replace(/%category/g, tags[tag]) + '\n' + [ 
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => { 
            return menu.help.map(help => { 
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help) 
                .replace(/%islimit/g, menu.limit ? '' : '') 
                .replace(/%isPremium/g, menu.premium ? '' : '') 
                .trim() 
            }).join('\n') 
          }), 
          footer 
        ].join('\n') 
      }), 
      after 
    ].join('\n') 
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '' 
    let replace = { 
      '%': '%', 
      p: _p, uptime, muptime, 
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0], 
      wasp: '@0', 
      me: conn.getName(conn.user.jid), 
      npmname: _package.name, 
      version: _package.version, 
      npmdesc: _package.description, 
      npmmain: _package.main, 
      author: _package.author.name, 
      license: _package.license, 
      exp: exp - min, 
      maxexp: xp, 
      totalexp: exp, 
      xp4levelup: max - exp, 
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]', 
      greeting, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, 
      readmore: readMore 
    } 
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]) 

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');

await conn.reply(m.chat, '✰【𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐄𝐥 𝐌𝐞𝐧𝐮】✰ . . .*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🍁 Goku-Black-Bot-MD 🌸', body: '👋 Hola ' + name, sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
    
    let pp1 = 'https://telegra.ph/file/e1f516b1abcbc07e4463b.mp4'
    let pp2 = 'https://telegra.ph/file/e1f516b1abcbc07e4463b.mp4'

    m.react('🌸') 
    conn.sendMessage(m.chat, { video: { url: [pp1, pp2].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: m }) 

  } catch (e) { 
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m, fake, ) 
    throw e 
  } 
} 

handler.help = ['menu'] 
handler.tags = ['main'] 
handler.command = ['menu', 'help', 'allmenu', 'menù'] 
handler.register = true 
export default handler 


const more = String.fromCharCode(8206) 
const readMore = more.repeat(4001) 

function clockString(ms) { 
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
} 

  var ase = new Date(); 
  var hour = ase.getHours(); 
switch(hour){ 
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break; 
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break; 
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break; 
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break; 
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break; 
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break; 
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break; 
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break; 
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break; 
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break; 
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break; 
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break; 
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break; 
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break; 
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break; 
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break; 
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break; 
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break; 
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break; 
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break; 
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break; 
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break; 
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break; 
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break; 
} 
  var greeting = hour;
