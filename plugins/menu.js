const { cmd, commands } = require('../command')
const config = require('../config')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Menu categories
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

        // Populate menu categories
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
            }
        }

        // Generate menu message
        let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

*┕─────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
   *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1 ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴀᴅᴜᴡᴀ👨🏻‍💻*`;

        // Create buttons for each category
        const buttons = [
            { buttonId: 'download', buttonText: { displayText: 'Download Commands' }, type: 1 },
            { buttonId: 'fun', buttonText: { displayText: 'Fun Commands' }, type: 1 },
            { buttonId: 'main', buttonText: { displayText: 'Main Commands' }, type: 1 },
            { buttonId: 'group', buttonText: { displayText: 'Group Commands' }, type: 1 },
            { buttonId: 'owner', buttonText: { displayText: 'Owner Commands' }, type: 1 },
            { buttonId: 'convert', buttonText: { displayText: 'Convert Commands' }, type: 1 },
            { buttonId: 'search', buttonText: { displayText: 'Search Commands' }, type: 1 },
            { buttonId: 'other', buttonText: { displayText: 'Other Menu' }, type: 1 },
            { buttonId: 'news', buttonText: { displayText: 'News Menu' }, type: 1 },
        ];

        // Create button message
        const buttonMessage = {
            text: madeMenu,
            footer: "Powered by Mr. Nadun",
            buttons: buttons,
            headerType: 1
        };

        // Send the message with buttons
        await conn.sendMessage(from, buttonMessage, { quoted: mek });

        // Handle button click events
        conn.on('message', async (msg) => {
            if (msg.buttonsResponseMessage) {
                const buttonId = msg.buttonsResponseMessage.selectedButtonId;

                let categoryCommands = '';
                switch (buttonId) {
                    case 'download':
                        categoryCommands = menu.download;
                        break;
                    case 'fun':
                        categoryCommands = menu.fun;
                        break;
                    case 'main':
                        categoryCommands = menu.main;
                        break;
                    case 'group':
                        categoryCommands = menu.group;
                        break;
                    case 'owner':
                        categoryCommands = menu.owner;
                        break;
                    case 'convert':
                        categoryCommands = menu.convert;
                        break;
                    case 'search':
                        categoryCommands = menu.search;
                        break;
                    case 'other':
                        categoryCommands = menu.other;
                        break;
                    case 'news':
                        categoryCommands = menu.news;
                        break;
                }

                if (categoryCommands) {
                    await conn.sendMessage(from, { text: categoryCommands }, { quoted: mek });
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});