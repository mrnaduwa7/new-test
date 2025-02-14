const config = require('../config');
const { cmd, commands } = require('../command');
const { Button, ButtonCollection } = require('whatsapp-web.js'); // Make sure to import the button collection

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
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
            news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
            }
        }

        let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

*┕─────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
   *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1 ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴀᴅᴜᴡᴀ👨🏻‍💻*

`;

        let buttons = [
            new Button("Download Commands", `/${menu.download}`, 'primary'),
            new Button("Fun Commands", `/${menu.fun}`, 'primary'),
            new Button("Main Commands", `/${menu.main}`, 'primary'),
            new Button("Group Commands", `/${menu.group}`, 'primary'),
            new Button("Owner Commands", `/${menu.owner}`, 'primary'),
            new Button("Convert Commands", `/${menu.convert}`, 'primary'),
            new Button("Search Commands", `/${menu.search}`, 'primary'),
            new Button("Other Commands", `/${menu.other}`, 'primary'),
            new Button("News Menu", `/${menu.news}`, 'primary'),
        ];

        let buttonCollection = new ButtonCollection(...buttons);

        // Send message with buttons
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            buttons: buttonCollection
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});