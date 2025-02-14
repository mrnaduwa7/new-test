const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list with buttons",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let buttons = [
            { buttonId: "main_menu", buttonText: { displayText: "📌 Main Menu" }, type: 1 },
            { buttonId: "download_menu", buttonText: { displayText: "📥 Download" }, type: 1 },
            { buttonId: "fun_menu", buttonText: { displayText: "🎮 Fun" }, type: 1 },
            { buttonId: "group_menu", buttonText: { displayText: "👥 Group" }, type: 1 },
            { buttonId: "owner_menu", buttonText: { displayText: "👑 Owner" }, type: 1 },
            { buttonId: "convert_menu", buttonText: { displayText: "🔄 Convert" }, type: 1 },
            { buttonId: "search_menu", buttonText: { displayText: "🔍 Search" }, type: 1 },
            { buttonId: "other_menu", buttonText: { displayText: "📚 Other" }, type: 1 },
            { buttonId: "news_menu", buttonText: { displayText: "📰 News" }, type: 1 }
        ];

        let message = {
            image: { url: config.ALIVE_IMG },
            caption: `👋 *Hello, ${pushname}!* \n\n🔹 *Welcome to Vajira-MD Bot!* \n\n📌 *Select a category from the buttons below to see available commands.*`,
            footer: "🤖 Powered by Vajira-MD",
            buttons: buttons,
            headerType: 4
        };

        await conn.sendMessage(from, message, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});