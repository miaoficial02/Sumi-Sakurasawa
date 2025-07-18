import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  const img = 'https://i.imgur.com/nd2fIGT.jpg' // Cambia por tu imagen personalizada
  const reglas = `
╭━━〔 *📜 REGLAS DEL BOT* 〕━━⬣
┃ 🧸 No spam de comandos.
┃ ⚠️ No agregar al bot sin permiso.
┃ 👑 Respeta a los admins y miembros.
┃ 🚫 No pedir flood ni hack.
┃ 📵 No enlaces sin autorización.
┃ 💡 Usa *#help* para ver comandos.
┃ 🤖 El bot está en fase de pruebas.
╰━━━━━━━━━━━━━━━━━━⬣
`
  await conn.sendMessage(m.chat, {
    image: { url: img },
    caption: reglas,
    mentions: [m.sender]
  }, { quoted: m })
}

handler.help = ['botreglas']
handler.tags = ['info']
handler.command = ['botreglas', 'reglasbot']

export default handler
