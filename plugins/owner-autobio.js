const handler = async (m, { conn, args }) => {
  if (!global.db.data.settings) global.db.data.settings = {}
  if (!global.db.data.settings[conn.user.jid]) global.db.data.settings[conn.user.jid] = {}

  if (m.sender !== conn.user.jid.split(':')[0] + '@s.whatsapp.net') {
    return m.reply('❌ Solo el owner puede usar este comando.')
  }

  const arg = args[0]?.toLowerCase()
  if (!arg || (arg !== 'on' && arg !== 'off')) {
    return m.reply('Usa: #autobio on / #autobio off')
  }

  global.db.data.settings[conn.user.jid].autobio = arg === 'on'
  await global.db.write()

  m.reply(`✅ Autobio ahora está *${arg === 'on' ? 'activada' : 'desactivada'}*`)
}
handler.help = ['autobio on', 'autobio off']
handler.tags = ['owner']
handler.command = /^autobio$/i
export default handler
