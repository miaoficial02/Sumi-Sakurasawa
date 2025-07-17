import fetch from 'node-fetch';

let testwelcome = async (m, { conn, groupMetadata }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
  
  const chat = global.db.data.chats[m.chat];
  if (!chat.welcome) return m.reply('⚠️ La bienvenida está desactivada en este grupo.');

  const newUser = m.sender;
  const groupSize = (groupMetadata.participants || []).length + 1;

  const fkontak = { 
    key: { 
      participants:"0@s.whatsapp.net", 
      remoteJid: "status@broadcast", 
      fromMe: false, 
      id: "Halo" 
    }, 
    message: { 
      contactMessage: { 
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${newUser.split('@')[0]}:${newUser.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      }
    }, 
    participant: "0@s.whatsapp.net"
  };

  let pp = await conn.profilePictureUrl(newUser, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');
  let img = await (await fetch(pp)).buffer();

  let txt = 'ゲ◜៹ New Member ៹◞ゲ';

  let bienvenida = `❀ *Bienvenido* a ${groupMetadata.subject}\n✰ @${newUser.split`@`[0]}\n${global.welcom1 || '¡Bienvenido al grupo!'}\n✦ Ahora somos ${groupSize} Miembros.\n•(=^●ω●^=)• Disfruta tu estadía en el grupo!\n> ✐ Puedes usar *#help* para ver la lista de comandos.`;

  await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak);
};

testwelcome.help = ['testwelcome'];
testwelcome.tags = ['tools'];
testwelcome.command = ['testwelcome'];
testwelcome.owner = false;
testwelcome.admin = true;

export default testwelcome;
