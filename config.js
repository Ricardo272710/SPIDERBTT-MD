/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['593979133620', '👑Ricardo - Creador👑', true],
['50764206082',
['595972157130']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['595972157130']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙍.𝘼 𝙎𝙋𝙄𝘿𝙀𝙍-𝙈𝘿'
global.author = 'BY RICARDO-ANTHONY'
global.wm = ' 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙍.𝘼 𝙎𝙋𝙄𝘿𝙀𝙍-𝙈𝘿'
global.wm2 = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙍.𝘼 𝙎𝙋𝙄𝘿𝙀𝙍-𝙈𝘿'
global.jxtxn = 'BY RICARDO-ANTHONY'
global.cb = 'BY RICARDO-ANTHONY'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'BY RICARDO-ANTHONY'
global.devnum = '+593979133620'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
