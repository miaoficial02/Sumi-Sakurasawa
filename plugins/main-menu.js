let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
┎┈┈┈┈┈୨♡୧┈┈┈┈┈┒
  𓏲꯭֟፝੭ ꯭⌑(꯭𝐒).꯭𝐔.꯭𝐌.꯭𝐈.꯭..𝐁.꯭𝐘...꯭𝐌.꯭𝐈.꯭𝐀.꯭𓏲꯭֟፝੭
┖┈┈┈┈┈୨♡୧┈┈┈┈┈┚
¡𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 *${botname}* 
¡𝐀𝐪𝐮𝐢 𝐭𝐢𝐞𝐧𝐞𝐬 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬! 
 
╔═══⩽✦✰✦⩾═══╗
  「 𝙄𝙉𝙁𝙊 𝘿𝙀 𝙇𝘼 𝘽𝙊𝙏 」
╚═══⩽✦✰✦⩾═══╝
╔════════════╗
║🚩 *𝐌𝐨𝐝𝐨*:*𝐏𝐮𝐛𝐥𝐢𝐜𝐚*
║📚 *𝐁𝐚𝐢𝐥𝐞𝐲𝐬*:*𝐌𝐮𝐥𝐭𝐢 𝐝𝐞𝐯𝐢𝐜𝐞*
║🌐 *𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬*:${totalCommands}
║⏱️ *𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐚*:${uptime}
║👤 *𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬*:${totalreg}
║👩‍💻 *𝐂𝐫𝐞𝐚𝐝𝐨𝐫*: 𝐂𝐡𝐢𝐧𝐢𝐭𝐚𝐚𝐚 🇨🇳👑
╚════════════╝
╔════⩽✦✰✦⩾════╗
  「 𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 」
╚════⩽✦✰✦⩾════╝
╔═════════════╗
║🌐 *𝐂𝐥𝐢𝐞𝐧𝐭𝐞*: @${userId.split('@')[0]}
║🚀 *𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚*: ${user.exp}
║📊 *𝐍𝐢𝐯𝐞𝐥*: ${user.level}
║🏅 *𝐑𝐚𝐧𝐠𝐨*: ${user.role}
╚═════════════╝

╔══⩽✦✰✦⩾══╗
   「 ${(conn.user.jid == global.conn.user.jid ? '𝘽𝙤𝙩 𝙊𝙛𝙞𝙘𝙞𝙖𝙡' : '𝙎𝙪𝙗𝘽𝙤𝙩')} 」
╚══⩽✦✰✦⩾══╝

> 𝐂𝐑𝐄𝐀 𝐔𝐍 𝐒𝐔𝐁-𝐁𝐎𝐓 𝐔𝐓𝐈𝐋𝐈𝐙𝐀𝐍𝐃𝐎 *𝐐𝐑* 𝐎 *𝐂𝐎𝐃𝐄*


✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙄𝙉𝙁𝙊
├• ✐; ₊˚✦୧︰𝘽𝙊𝙏 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos para ver estado e información de la Bot.
🌸ᩚ *#help • #menu*
> ✦ Ver la lista de comandos de la Bot.
🌸ᩚ *#uptime • #runtime*
> ✦ Ver tiempo activo o en linea de la Bot.
🌸ᩚ *#sc • #script*
> ✦ Link del repositorio oficial de la Bot
🌸 *#staff • #colaboradores*
> ✦ Ver la lista de desarrolladores de la Bot.
🌸ᩚ *#serbot • #serbot code*
> ✦ Crea una sesión de Sub-Bot.
🌸ᩚ *#bots • #sockets*
> ✦ Ver la lista de Sub-Bots activos.
🌸ᩚ *#creador*
> ✦ Contacto del creador de la Bot.
🌸ᩚ *#status • #estado*
> ✦ Ver el estado actual de la Bot.
🌸ᩚ *#links • #grupos*
> ✦ Ver los enlaces oficiales de la Bot.
🌸ᩚ *#infobot • #infobot*
> ✦ Ver la información completa de la Bot.
🌸ᩚ *#sug • #newcommand*
> ✦ Sugiere un nuevo comando.
🌸ᩚ *#p • #ping*
> ✦ Ver la velocidad de respuesta del Bot.
🌸ᩚ *#reporte • #reportar*
> ✦ Reporta alguna falla o problema de la Bot.
🌸ᩚ *#sistema • #system*
> ✦ Ver estado del sistema de alojamiento.
🌸ᩚ *#speed • #speedtest*
> ✦ Ver las estadísticas de velocidad de la Bot.
🌸ᩚ *#views • #usuarios*
> ✦ Ver la cantidad de usuarios registrados en el sistema.
🌸 *#funciones • #totalfunciones*
> ✦ Ver todas las funciones de la Bot.
🌸 *#ds • #fixmsgespera*
> ✦ Eliminar archivos de sesión innecesarios.
🌸ᩚ *#editautoresponder*
> ✦ Configurar un Prompt personalizado de la Bot.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷ 𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos para realizar búsquedas en distintas plataformas.
🌸ᩚ *#tiktoksearch • #tiktoks*
> ✦ Buscador de videos de tiktok.
🌸ᩚ *#tweetposts*
> ✦ Buscador de posts de Twitter/X.
🌸ᩚ *#ytsearch • #yts*
> ✦ Realiza búsquedas de Youtube.
🌸ᩚ *#githubsearch*
> ✦ Buscador de usuarios de GitHub.
🌸ᩚ *#cuevana • #cuevanasearch*
> ✦ Buscador de películas/series por Cuevana.
🌸 *#google*
> ✦ Realiza búsquedas por Google.
🌸ᩚ *#pin • #pinterest*
> ✦ Buscador de imagenes de Pinterest.
🌸ᩚ *#imagen • #image*
> ✦ buscador de imagenes de Google.
🌸ᩚ *#infoanime*
> ✦ Buscador de información de anime/manga.
🌸ᩚ *#npmjs*
> ✦ Buscandor de npmjs.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙄𝙉𝙁𝙊
├• ✐; ₊˚✦୧︰𝘽𝙊𝙏 .
├┈・──・──・﹕₊˚ ✦・୨୧・ 
★ Comandos de descargas para varios archivos.
🌸ᩚ *#tiktok • #tt*
> ✦ Descarga videos de TikTok.
🌸 *#mediafire • #mf*
> ✦ Descargar un archivo de MediaFire.
🌸ᩚ *#pinvid • #pinvideo* + [enlacé]
> ✦ Descargar vídeos de Pinterest. 
🌸ᩚ *#mega • #mg* + [enlacé]
> ✦ Descargar un archivo de MEGA.
🌸ᩚ *#play • #play2*
> ✦ Descarga música/video de YouTube.
🌸ᩚ *#ytmp3 • #ytmp4*
> ✦ Descarga música/video de YouTube mediante url.
🌸ᩚ *#fb • #facebook*
> ✦ Descarga videos de Facebook.
🌸ᩚ *#twitter • #x* + [Link]
> ✦ Descargar un video de Twitter/X
🌸ᩚ *#ig • #instagram*
> ✦ Descarga contenido de Instagram.
🌸ᩚ *#tts • #tiktoks* + [busqueda]
> ✦ Buscar videos de tiktok 
🌸ᩚ *#terabox • #tb* + [enlace]
> ✦ Descargar archivos por Terabox.
🌸ᩚ *#ttimg • #ttmp3* + <url>
> ✦ Descarga fotos/audios de tiktok. 
🌸ᩚ *#gitclone* + <url> 
> ✦ Descarga un repositorio de github.
🌸 *#apk • #modapk*
> ✦ Descarga un apk de Aptoide.
🌸ᩚ *#tiktokrandom • #ttrandom*
> ✦ Descarga un video aleatorio de tiktok.
🌸 *#npmdl • #npmdownloader*
> ✦ Descarga paquetes de NPMJs.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝙍𝙋𝙂.
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos de economía y rpg para ganar dinero y otros recursos.
🌸ᩚ *#w • #work • #trabajar*
> ✦ Trabaja para ganar ${moneda}.
🌸ᩚ *#slut • #protituirse*
> ✦ Trabaja como prostituta y gana ${moneda}.
🌸ᩚ *#cf • #suerte*
> ✦ Apuesta tus ${moneda} a cara o cruz.
🌸 *#crime • #crimen
> ✦ Trabaja como ladrón para ganar ${moneda}.
🌸ᩚ *#ruleta • #roulette • #rt*
> ✦ Apuesta ${moneda} al color rojo o negro.
🌸ᩚ *#casino • #apostar*
> ✦ Apuesta tus ${moneda} en el casino.
🌸ᩚ *#slot*
> ✦ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
🌸ᩚ *#cartera • #wallet*
> ✦ Ver tus ${moneda} en la cartera.
🌸 *#banco • #bank*
> ✦ Ver tus ${moneda} en el banco.
🌸ᩚ *#deposit • #depositar • #d*
> ✦ Deposita tus ${moneda} al banco.
🌸ᩚ *#with • #retirar • #withdraw*
> ✦ Retira tus ${moneda} del banco.
🌸ᩚ *#transfer • #pay*
> ✦ Transfiere ${moneda} o XP a otros usuarios.
🌸ᩚ *#miming • #minar • #mine*
> ✦ Trabaja como minero y recolecta recursos.
🌸ᩚ *#buyall • #buy*
> ✦ Compra ${moneda} con tu XP.
🌸ᩚ *#daily • #diario*
> ✦ Reclama tu recompensa diaria.
🌸ᩚ *#cofre*
> ✦ Reclama un cofre diario lleno de recursos.
🌸ᩚ *#weekly • #semanal*
> ✦ Reclama tu regalo semanal.
🌸ᩚ *#monthly • #mensual*
> ✦ Reclama tu recompensa mensual.
🌸ᩚ *#steal • #robar • #rob*
> ✦ Intenta robarle ${moneda} a alguien.
🌸ᩚ *#robarxp • #robxp*
> ✦ Intenta robar XP a un usuario.
🌸ᩚ *#eboard • #baltop*
> ✦ Ver el ranking de usuarios con más ${moneda}.
🌸 *#aventura • #adventure*
> ✦ Aventúrate en un nuevo reino y recolecta recursos.
🌸ᩚ *#curar • #heal*
> ✦ Cura tu salud para volverte aventurar.
🌸 *#cazar • #hunt • #berburu*
> ✦ Aventúrate en una caza de animales.
🌸ᩚ *#inv • #inventario*
> ✦ Ver tu inventario con todos tus ítems.
🌸ᩚ *#mazmorra • #explorar*
> ✦ Explorar mazmorras para ganar ${moneda}.
🌸ᩚ *#halloween*
> ✦ Reclama tu dulce o truco (Solo en Halloween).
🌸ᩚ *#christmas • #navidad*
> ✦ Reclama tu regalo navideño (Solo en Navidad).

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos para creaciones de stickers etc.
🌸ᩚ *#sticker • #s*
> ✦ Crea stickers de (imagen/video)
🌸ᩚ *#setmeta*
> ✦ Estable un pack y autor para los stickers.
🌸ᩚ *#delmeta*
> ✦ Elimina tu pack de stickers.
🌸ᩚ *#pfp • #getpic*
> ✦ Obtén la foto de perfil de un usuario.
🌸ᩚ *#qc*
> ✦ Crea stickers con texto o de un usuario.
🌸ᩚ *#toimg • #img*
> ✦ Convierte stickers en imagen.
🌸 *#brat • #ttp • #attp*︎ 
> ✦ Crea stickers con texto.
🌸 *#emojimix*
> ✦ Fuciona 2 emojis para crear un sticker.
🌸ᩚ *#wm*
> ✦ Cambia el nombre de los stickers.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos de herramientas con muchas funciones.
🌸 *#calcular • #calcular • #cal*
> ✦ Calcular todo tipo de ecuaciones.
🌸ᩚ *#tiempo • #clima*
> ✦ Ver el clima de un pais.
🌸 *#horario*
> ✦ Ver el horario global de los países.
🌸 *#fake • #fakereply*
> ✦ Crea un mensaje falso de un usuario.
🌸 *#enhance • #remini • #hd*
> ✦ Mejora la calidad de una imagen.
🌸ᩚ *#letra*
> ✦ Cambia la fuente de las letras.
🌸 *#read • #readviewonce • #ver*
> ✦ Ver imágenes de una sola vista.
🌸 *#whatmusic • #shazam*
> ✦ Descubre el nombre de canciones o vídeos.
🌸 *#ss • #ssweb*
> ✦ Ver el estado de una página web.
🌸ᩚ *#length • #tamaño*
> ✦ Cambia el tamaño de imágenes y vídeos.
🌸ᩚ *#say • #decir* + [texto]
> ✦ Repetir un mensaje.
🌸 *#todoc • #toducument*
> ✦ Crea documentos de (audio, imágenes y vídeos). 
🌸*#translate • #traducir • #trad*
> ✦ Traduce palabras en otros idiomas.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝙋𝙀𝙍𝙁𝙄𝙇 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
🌸ᩚ *#reg • #verificar • #register*
> ✦ Registra tu nombre y edad en el bot.
🌸ᩚ *#unreg*
> ✦ Elimina tu registro del bot.
🌸ᩚ *#profile*
> ✦ Muestra tu perfil de usuario.
🌸ᩚ *#marry* [mension / etiquetar]
> ✦ Propón matrimonio a otro usuario.
🌸ᩚ *#divorce*
> ✦ Divorciarte de tu pareja.
🌸ᩚ *#setgenre • #setgenero*
> ✦ Establece tu género en el perfil del bot.
🌸 *#delgenre • #delgenero*
> ✦ Elimina tu género del perfil del bot.
🌸ᩚ *#setbirth • #setnacimiento*
> ✦ Establece tu fecha de nacimiento en el perfil del bot.
🌸ᩚ *#delbirth • #delnacimiento*
> ✦ Elimina tu fecha de nacimiento del perfil del bot.
🌸 *#setdescription • #setdesc*
> ✦ Establece una descripción en tu perfil del bot.
🌸ᩚ *#deldescription • #deldesc*
> ✦ Elimina la descripción de tu perfil del bot.
🌸ᩚ *#lb • #lboard* + <Paginá>
> ✦ Top de usuarios con más (experiencia y nivel).
🌸ᩚ *#level • #lvl* + <@Mencion>
> ✦ Ver tu nivel y experiencia actual.
🌸 *#comprarpremium • #premium*
> ✦ Compra un pase premium para usar el bot sin límites.
🌸ᩚ *#confesiones • #confesar*
> ✦ Confiesa tus sentimientos a alguien de manera anonima.

✞͙͙⏜❟︵̩⏜੭🌸୧ֹ⏜︵̩❟⏜፞✞͙͙͙͙.
├┈ ↷  𝙈𝙀𝙉𝙐
├• ✐; ₊˚✦୧︰𝙂𝙍𝙐𝙋𝙊𝙎 .
├┈・──・──・﹕₊˚ ✦・୨୧・
★ Comandos de grupos para una mejor gestión de ellos.
🌸ᩚ *#hidetag*
> ✦ Envia un mensaje mencionando a todos los usuarios
🌸 *#gp • #infogrupo*
> ✦  Ver la Informacion del grupo.
🌸 *#linea • #listonline*
> ✦ Ver la lista de los usuarios en linea.
🌸ᩚ *#setwelcome*
> ✦ Establecer un mensaje de bienvenida personalizado.
🌸ᩚ *#setbye*
> ✦ Establecer un mensaje de despedida personalizado.
🌸ᩚ *#link*
> ✦ El bot envia el link del grupo.
🌸ᩚ *admins • admin*
> ✦ Mencionar a los admins para solicitar ayuda.
🌸ᩚ *#restablecer • #revoke*
> ✦ Restablecer el enlace del grupo.
🌸 *#open*
> ✦ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
🌸ᩚ *#close*
> ✦ Cambia ajustes del grupo para que solo los administradores envien mensaje.
🌸ᩚ *#kick* [número / mension]
> ✦ Elimina un usuario de un grupo.
🌸ᩚ *#add • #añadir • #agregar* [número]
> ✦ Invita a un usuario a tu grupo.
🌸 *#promote* [mension / etiquetar]
> ✦ El bot dara administrador al usuario mencionando.
🌸ᩚ *#demote* [mension / etiquetar]
> ✦ El bot quitara administrador al usuario mencionando.
🌸ᩚ *#gpbanner • #groupimg*
> ✦ Cambiar la imagen del grupo.
🌸ᩚ *#gpname • #groupname*
> ✦ Cambiar el nombre del grupo.
🌸ᩚ *#gpdesc • #groupdesc*
> ✦ Cambiar la descripción del grupo.
🌸ᩚ *#advertir • #warn • #warning*
> ✦ Darle una advertencia aún usuario.
🌸ᩚ ︎*#unwarn • #delwarn*
> ✦ Quitar advertencias.
🌸ᩚ *#advlist • #listadv*
> ✦ Ver lista de usuarios advertidos.
🌸ᩚ *#bot on*
> ✦ Enciende el bot en un grupo.
🌸ᩚ *#bot off*
> ✦ Apaga el bot en un grupo.
🌸 *#mute* [mension / etiquetar]
> ✦ El bot elimina los mensajes del usuario.
🌸ᩚ *#unmute* [mension / etiquetar]
> ✦ El bot deja de eliminar los mensajes del usuario.
🌸ᩚ *#encuesta • #poll*
> ✦ Crea una encuesta.
🌸 *#delete • #del*
> ✦ Elimina mensaje de otros usuarios.
🌸ᩚ *#fantasmas*
> ✦ Ver lista de inactivos del grupo.
🌸ᩚ *#kickfantasmas*
> ✦ Elimina a los inactivos del grupo.
🌸ᩚ *#invocar • #tagall • #todos*
> ✦ Invoca a todos los usuarios de un grupo.
🌸ᩚ *#setemoji • #setemo*
> ✦ Cambia el emoji que se usa en la invitación de usuarios.
🌸ᩚ *#listnum • #kicknum*
> ✦ Elimine a usuario por el prefijo de país.

  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: "192828iqiiw8".id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
