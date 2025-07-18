let handler = async (m, { conn, command, usedPrefix }) => {
  let img = 'https://files.catbox.moe/92p8um.jpg'

  // 1. Enviar imagen con texto (sin botones)
  let staff = `🌸 *EQUIPO DE AYUDANTES* 🌸
✰ *Dueño:* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Librería:* ${libreria} ${baileys}

❍ *Creador:*

✿ 𝐈𝐭𝐬.𝐦𝐥𝐚.𝐨𝐟𝐢𝐜𝐢𝐚𝐥
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/miaoficial02

✿ *𝐎𝐓𝐑𝐀𝐒 𝐑𝐄𝐃𝐄𝐒:* 
📸 Instagram » sigue nuestro contenido exclusivo.`

  await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)

  // 2. Enviar mensaje con botón de Instagram por separado
  const botonIG = {
    text: '🌐 Seguinos en nuestras redes:',
    footer: 'Yuki Suou | Bot Oficial ✨',
    templateButtons: [
      {
        urlButton: {
          displayText: '📸 Instagram',
          url: 'https://instagram.com/tuperfil' // <-- cambiá esto por el tuyo real
        }
      }
    ]
  }

  await conn.sendMessage(m.chat, botonIG, { quoted: m })
}

handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
