const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🚀",
    desc: "Get the bot command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, isOwner, reply }) => {
    try {
        let menuCategories = {
            main: "📌 *Main Commands*",
            download: "📥 *Download Commands*",
            fun: "🎭 *Fun Commands*",
            group: "👥 *Group Commands*",
            owner: "👑 *Owner Commands*",
            convert: "🔄 *Convert Commands*",
            search: "🔎 *Search Commands*",
            other: "🛠 *Other Commands*",
            news: "📰 *News Commands*"
        };

        let buttons = [];
        for (let category in menuCategories) {
            buttons.push({ buttonId: category, buttonText: { displayText: menuCategories[category] }, type: 1 });
        }

        let menuMessage = {
            image: { url: config.ALIVE_IMG },
            caption: `👋 *Hello ${pushname}, Welcome to MR.NADUWA-V1!*  
🔹 *Select a category from below:*`,
            footer: "Powered by MR.NADUWA-V1",
            buttons: buttons,
            headerType: 4
        };

        await conn.sendMessage(from, menuMessage, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});