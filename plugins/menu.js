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
                menu[commands[i].category] += `┋ ${commands[i].pattern}\n`;
            }
        }

        // Get the current time, date, and day of the week
        const time = moment().tz("Asia/Colombo").format("HH:mm:ss");
        const date = moment().tz("Asia/Colombo").format("DD/MM/YYYY");
        const dayOfWeek = moment().tz("Asia/Colombo").format("dddd");

        let greeting = "සුභ රාත්‍රියක් ළමයෝ 🌌"; // Default greeting
        
        if (time < "05:00:00") {
            greeting = "සුභ උදෑසනක් ළමයෝ 🌄";
        } else if (time < "11:00:00") {
            greeting = "සුභ උදෑසනක් ළමයෝ 🌄";
        } else if (time < "15:00:00") {
            greeting = "සුභ දහවලක් ළමයෝ 🌅";
        } else if (time < "19:00:00") {
            greeting = "සුභ රාත්‍රියක් ළමයෝ 🌃";
        }
        let desc = `*👋🏻 හායි ${pushname}, I AM MR.NADUWA-V1 ♻️*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1  || DOWNLOAD MENU*
*| ➤ 2  || FUN MENU*
*| ➤ 3  || MAIN MENU*
*| ➤ 4  || GROUP  MENU*
*| ➤ 5  || OWNER MENU*
*| ➤ 6  || CONVERT MENU*
*| ➤ 7  || SEARCH MENU*
*| ➤ 8  || OTHER MENU*
*| ➤ 9  || NEWS MENU*
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
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `

        ╭─────────────────────────❒
        │ 🇱🇰 *Download* Commands
        ╰─────────────────────────❒
        ${menu.download}
        
        

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
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `
 ╭─────────────────────────❒
        │ 🇱🇰 *Fun* Commands
        ╰─────────────────────────❒
        ${menu.fun}
        

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
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `
╭─────────────────────────❒
        │ 🇱🇰 *Main* Commands
        ╰─────────────────────────❒
        ${menu.main}
        
        


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
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `
 ╭─────────────────────────❒
        │ 🇱🇰 *Group* Commands
        ╰─────────────────────────❒
        ${menu.group}
         
    

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
                    case '5':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `
  ╭─────────────────────────❒
        │ 🇱🇰 *Owner* Commands
        ╰─────────────────────────❒
        ${menu.owner}
        
          
    
    
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
                    case '6':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg`},caption: `
  ╭─────────────────────────❒
        │ 🇱🇰 *Convert* Commands
        ╰─────────────────────────❒
        ${menu.convert}
        
      

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
                    case '7':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `
 ╭─────────────────────────❒
        │ 🇱🇰 *Search* Commands
        ╰─────────────────────────❒
        ${menu.search}
        

 
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
                    case '8':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `
 ╭─────────────────────────❒
        │ 🇱🇰 *Other* Commands
        ╰─────────────────────────❒
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
                    case '9':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/iclcf6.jpeg `},caption: `
╭─────────────────────────❒
        │ 🇱🇰 *News* Commands
        ╰─────────────────────────❒
        ${menu.news}

        

 
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

