import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import *as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'


global.owner = [['201063720595', 'شادو', true], ['201063720595']]
global.lidOwners = [['+120363418925420605']] 
global.mods = []
global.prems = []

global.botNumberCode = ""
global.confirmCode = ""

global.isBaileysFail = false
global.shadowza = [
  "https://i.ibb.co/sK1vz5h/3b47de7f85d9.jpg",
  "https://telegra.ph/file/71662a29c8f6c88b4ca28.png",
];
global.packname = 'const sticker = () => {\nreturn {\nnamebot: `Shadow`,\nauthor: `Abdelrahman Mohamed`,\nnumber: `+201063720595`,\n\t}\n}'
global.author = 'HinaBot'
global.wm = 'HinaBot'
global.igfg = 'HinaBot'
global.wait = '⌯ انــتــظــر لــحـظـه مــن فـضـلـك'

global.cc = '> 𝗛𝗜𝗡𝗔-𝗕𝗢𝗧 © 𝗕𝗬 𝗦𝗛𝗔𝗗𝗢𝗪'
global.cc = '1.0.0'

// -----------------------------------------
global.acsdapi = "https://api.acsd-x.com/"
global.apikey = "xshadowzax"
global.openai_key = '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' /* https://platform.openai.com/account/api-keys */
global.baileys = '@whiskeysockets/baileys'
global.deliriussapi = 'https://deliriussapi-oficial.vercel.app'
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
global.multiplier = 850 
global.maxwarn = '4'
// -----------------------------------------
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'
// -----------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
