const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Create a bouncing loading effect with color change
        let loadingMessage = "*Loading your menu...*\n";
        let loadingDots = ['1', '2', '3', '4', '5', '6'];
        let loadingAnimation = '';
        
        for (let i = 0; i < 5; i++) {
            for (let dot of loadingDots) {
                loadingAnimation = `*Loading...* ${dot}`;
                await conn.sendMessage(from, { text: loadingAnimation, mentions: [sender] });
                await new Promise(resolve => setTimeout(resolve, 500)); // Wait for half a second before showing next dot
            }
        }

        // Personalized Greeting with User Name
        let greetingMessage = `*Hello ${pushname}!*\nWelcome to your personal menu. Let’s explore the commands!`;

        // Command Categories
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
                menu[commands[i].category] += `${commands[i].pattern}\n`;
            }
        }

        // Buttons
        const buttonMenu = [
            { buttonId: 'main_commands', buttonText: { displayText: 'Main Commands' }, type: 1 },
            { buttonId: 'download_commands', buttonText: { displayText: 'Download Commands' }, type: 1 },
            { buttonId: 'fun_commands', buttonText: { displayText: 'Fun Commands' }, type: 1 },
            { buttonId: 'group_commands', buttonText: { displayText: 'Group Commands' }, type: 1 },
            { buttonId: 'owner_commands', buttonText: { displayText: 'Owner Commands' }, type: 1 },
            { buttonId: 'convert_commands', buttonText: { displayText: 'Convert Commands' }, type: 1 },
            { buttonId: 'search_commands', buttonText: { displayText: 'Search Commands' }, type: 1 },
            { buttonId: 'other_commands', buttonText: { displayText: 'Other Commands' }, type: 1 },
            { buttonId: 'news_commands', buttonText: { displayText: 'News Commands' }, type: 1 }
        ];

        // Send personalized greeting with buttons
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: greetingMessage,
            buttons: buttonMenu,
            footer: 'Powered by Mr. Naduma',
            headerType: 4
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});