const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    let menu = {
main: '',
download: '',
fun: '',
group: '',
owner: '',
convert: '',
search: '',
other: '',
news:''
};


for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}
        let desc = `*👋🏻 හායි ${pushname}, I AM MR.NADUWA-V1 ♻️*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1  || OWNER MENU*
*| ➤ 2  || CONVERT MENU*
*| ➤ 3  || MOVIE MENU*
*| ➤ 4  || DOWNLOAD MENU*
*| ➤ 5  || GROUP MENU*
*| ➤ 6  || ANIME MENU*
*| ➤ 7  || FUN MENU*
*| ➤ 8  || NEWS MENU*
*| ➤ 9  || BUG MENU*
*| ➤10 || OTHER MENU*
*────────────────────────────────*

_🔢 Reply The Number That You Want_

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1`;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'NADUWA 📌',
          newsletterJid: "",
          },
          externalAdReply: {
              title: `NADUWA📌`,
              body: `🤖 MADE BY MR.NADUWA  🤖`,
              thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,
              sourceUrl: ``,
              
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':               
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `*＿＿＿＿[ ＯＷＮＥＲ  ＭＥＮＵ 🧑🏻‍💻 ]＿＿＿＿*

     ${menu.owner}

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '2':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `*＿＿＿＿[ ＣＯＮＶＥＲＴ  ＭＥＮＵ 🔁 ]＿＿＿＿*

    ${memu.convert}

*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ 🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '3':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `*＿＿＿＿[ ＭＯＶＩＥ  ＭＥＮＵ 📽️ ]＿＿＿＿*

  ${menu.movie}


> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠQ🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '4':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `*＿＿＿＿[ ＤＯＷＮＬＯＡＤ  ＭＥＮＵ 📥 ]＿＿＿＿*



  ${menu.download}

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1 🤍`,
               body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '6':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `*＿＿＿＿[ FUN  ＭＥＮＵ 🧚🏻‍♀️ ]＿＿＿＿*


   ${menu.fun}

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '8':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `*＿＿＿＿[ ＮＥＷＳ  ＭＥＮＵ 📃 ]＿＿＿＿*



  ${menu.news}

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR.NADUWA-V1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `MR.NADUWA-VQ🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '10':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `*＿＿＿＿[ ＯＴＨＥＲ  ＭＥＮＵ 🐋]＿＿＿＿*

  ${menu.other}

 
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1*`,
        contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1 🤍`,
                body: `The Best Multi Device Whatsapp Bot.`,
                thumbnailUrl: `https://files.catbox.moe/iclcf6.jpeg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
 
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
