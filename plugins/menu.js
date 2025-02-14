const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🚀",
    desc: "Interactive Bot Menu",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let menu = {
            main: '', download: '', fun: '', group: '', 
            owner: '', convert: '', search: '', other: '', news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `✨ *${commands[i].pattern}*\n`;
            }
        }

        let madeMenu = `
╔═══════════════════╗
║  🚀 *ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1* 🚀
║   *ɪɴᴛᴇʀᴀᴄᴛɪᴠᴇ ᴍᴇɴᴜ*
╚═══════════════════╝

🎭 *Hello, ${pushname}!* 🎭
Welcome to *Mr. Naduwa Bot*!  
Choose a category below:  
`;

        let buttons = [
            { buttonId: "maincmd", buttonText: { displayText: "📌 Main" }, type: 1 },
            { buttonId: "downloadcmd", buttonText: { displayText: "🎵 Download" }, type: 1 },
            { buttonId: "funcmd", buttonText: { displayText: "🎭 Fun" }, type: 1 },
            { buttonId: "groupcmd", buttonText: { displayText: "👥 Group" }, type: 1 },
            { buttonId: "ownercmd", buttonText: { displayText: "👑 Owner" }, type: 1 },
            { buttonId: "convertcmd", buttonText: { displayText: "🔄 Convert" }, type: 1 },
            { buttonId: "searchcmd", buttonText: { displayText: "🔎 Search" }, type: 1 },
            { buttonId: "othercmd", buttonText: { displayText: "📌 Other" }, type: 1 },
            { buttonId: "newscmd", buttonText: { displayText: "📰 News" }, type: 1 }
        ];

        let buttonMessage = {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            footer: "⚡ Powered by Mr. Naduwa ⚡",
            buttons: buttons,
            headerType: 4
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});

// Handle Button Clicks
conn.on("message", async (message) => {
    try {
        const { from } = message;

        if (message.message?.buttonsResponseMessage) {
            let buttonId = message.message.buttonsResponseMessage.selectedButtonId;
            let response = "";

            switch (buttonId) {
                case "maincmd":
                    response = `📌 *Main Commands:* \n${menu.main}`;
                    break;
                case "downloadcmd":
                    response = `🎵 *Download Commands:* \n${menu.download}`;
                    break;
                case "funcmd":
                    response = `🎭 *Fun Commands:* \n${menu.fun}`;
                    break;
                case "groupcmd":
                    response = `👥 *Group Commands:* \n${menu.group}`;
                    break;
                case "ownercmd":
                    response = `👑 *Owner Commands:* \n${menu.owner}`;
                    break;
                case "convertcmd":
                    response = `🔄 *Convert Commands:* \n${menu.convert}`;
                    break;
                case "searchcmd":
                    response = `🔎 *Search Commands:* \n${menu.search}`;
                    break;
                case "othercmd":
                    response = `📌 *Other Commands:* \n${menu.other}`;
                    break;
                case "newscmd":
                    response = `📰 *News Commands:* \n${menu.news}`;
                    break;
                default:
                    response = "❌ Invalid selection!";
            }

            await conn.sendMessage(from, { text: response });
        }
    } catch (e) {
        console.log("Error handling button:", e);
    }
});