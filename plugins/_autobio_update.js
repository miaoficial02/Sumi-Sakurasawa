function clockString(ms) {
  if (isNaN(ms)) return '--:--:--'
  let h = Math.floor(ms / 3600000)
  let m = Math.floor((ms % 3600000) / 60000)
  let s = Math.floor((ms % 60000) / 1000)
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}

const handler = async (m, { conn }) => {
  let setting = global.db.data.settings?.[conn.user.jid]
  if (!setting?.autobio) return

  let uptime = clockString(process.uptime() * 1000)
  let bio = `『${global.packname}』 | Activo: ${uptime} | Developed by 👑its.mia.oficial👑`

  try {
    await conn.updateProfileStatus(bio)
  } catch (e) {
    // ignorar errores
  }
}

handler.all = true // se ejecuta en todos los mensajes
export default handler
