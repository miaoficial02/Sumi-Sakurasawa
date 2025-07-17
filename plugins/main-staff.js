let handler = async (m, { conn, command, usedPrefix }) => {
  let img = 'https://files.catbox.moe/92p8um.jpg'
  let staff = `🌸 *𝐄𝐐𝐔𝐈𝐏𝐎 𝐃𝐄 𝐀𝐘𝐔𝐃𝐀𝐍𝐓𝐄𝐒* 🌸
✰ *Dueño:* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Librería:* ${libreria} ${baileys}

❍ *𝐂𝐑𝐄𝐀𝐃𝐎𝐑:*

✿ 𝐈𝐭𝐬.𝐦𝐥𝐚.𝐨𝐟𝐢𝐜𝐢𝐚𝐥
> 🜸 Rol » *𝐂𝐑𝐄𝐀𝐃𝐎𝐑*
> ✧ GitHub » https://github.com/miaoficial02

✿ *𝐎𝐓𝐑𝐀𝐒 𝐑𝐄𝐃𝐄𝐒:*
📸 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 » 𝐒𝐢𝐠𝐮𝐞 𝐥𝐚 𝐜𝐮𝐞𝐧𝐭𝐚 𝐝𝐞 𝐥𝐚 𝐨𝐰𝐧𝐞𝐫.
`

  const template = {
    image: { url: img },
    caption: staff.trim(),
    footer: '🌸 𝐒𝐔𝐌𝐈 | 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 🌸',
    templateButtons: [
      {
        urlButton: {
          displayText: '📸 Instagram',
          url: 'https://instagram.com/its.mia.oficial' // ← cambiá por tu cuenta real
        }
      }
    ]
  }

  await conn.sendMessage(m.chat, template, { quoted: m })
}

handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
