let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let pulsa = global.pulsa
let numberowner = global.numberowner
let anu = `Owner nya sultan gausah donasi

Arigatou!

Contact person Owner:
wa.me/${numberowner} (Owner)

, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
