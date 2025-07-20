import moment from 'moment-timezone';

let handler = async (m, { conn }) => {
  let date = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM/YY')
  let time = moment().tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')

  // Asegura que autobio siempre esté activo
  let idBot = conn.user.jid
  global.db.data.settings[idBot] = global.db.data.settings[idBot] || {}
  global.db.data.settings[idBot].autobio = true

  // Si está activado, actualiza la bio automáticamente
  if (global.db.data.settings[idBot].autobio) {
    let bio = `🌸 ${global.botname} 🌸 | #help #owner | by @its.mia.oficial`
    await conn.updateProfileStatus(bio).catch(console.error)
  }
}
handler.all = handler
export default handler
