const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
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

        let madeMenu = `*╭──❒ MR.NADUWA-V1 MENU ❒──╮*

👤 *Hello, ${pushname}*
⚡ *Your Ultimate WhatsApp Bot!*

*📜 Categories:*
💠 *Main Commands*
💠 *Download Commands*
💠 *Fun Commands*
💠 *Group Commands*
💠 *Owner Commands*
💠 *Convert Commands*
💠 *Search Commands*
💠 *Other Features*
💠 *Latest News*

🔖 *Choose a category using the buttons below.*

*╰──────────────────❒*`;

        // Creating interactive buttons
        let buttons = [
            { buttonId: "main_menu", buttonText: { displayText: "🏠 Main Menu" }, type: 1 },
            { buttonId: "next_menu", buttonText: { displayText: "➡️ Next" }, type: 1 },
            { buttonId: "exit_menu", buttonText: { displayText: "❌ Exit" }, type: 1 }
        ];

        let buttonMessage = {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            footer: "🔹 Powered by MR.NADUWA 🔹",
            buttons: buttons,
            headerType: 4
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});