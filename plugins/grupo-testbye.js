import fetch from 'node-fetch';

let testbye = async (m, { conn, groupMetadata }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
  
  const chat = global.db.data.chats[m.chat];
  if (!chat.welcome) return m.reply('⚠️ La despedida está desactivada en este grupo.');

  const userLeaving = m.sender;
  const groupSize = (groupMetadata.participants || []).length - 1; // Asumiendo que se va uno

  const fkontak = { 
    key: { 
      participants:"0@s.whatsapp.net", 
      remoteJid: "status@broadcast", 
      fromMe: false, 
      id: "Halo" 
    }, 
    message: { 
      contactMessage: { 
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userLeaving.split('@')[0]}:${userLeaving.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      }
    }, 
    participant: "0@s.whatsapp.net"
  };

  let pp = await conn.profilePictureUrl(userLeaving, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');
  let img = await (await fetch(pp)).buffer();

  let txt = 'ゲ◜៹ Bye Member ៹◞ゲ';

  let goodbye = `❀ *Adiós* de ${groupMetadata.subject}\n✰ @${userLeaving.split`@`[0]}\n${global.welcom2 || '¡Adiós! Esperamos verte pronto.'}\n✦ Ahora somos ${groupSize} Miembros.\n•(=^●ω●^=)• Te esperamos pronto!\n> ✐ Puedes usar *#help* para ver la lista de comandos.`;

  await conn.sendMini(m.chat, txt, dev, goodbye, img, img, redes, fkontak);
};

testbye.help = ['testbye'];
testbye.tags = ['tools'];
testbye.command = ['testbye'];
testbye.owner = false;
testbye.admin = true;

export default handler;
