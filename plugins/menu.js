const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        let buttonMessage = {
            image: { url: config.ALIVE_IMG }, // Image for the menu
            caption: `🔥 *𝐌𝐑.𝐍𝐀𝐃𝐔𝐖𝐀-𝐕𝟏* 🔥\n\n👋 Hello, *${pushname}*\n📅 Date: *${new Date().toLocaleDateString()}*\n🕒 Time: *${new Date().toLocaleTimeString()}*\n\n🎛 *Choose a Menu Below:*`,
            footer: "✨ Powered by MR NADUWA",
            buttons: [
                { buttonId: "owner", buttonText: { displayText: "👨‍💻 Owner Menu" }, type: 1 },
                { buttonId: "download", buttonText: { displayText: "📥 Download Menu" }, type: 1 },
                { buttonId: "movie", buttonText: { displayText: "🎬 Movie Menu" }, type: 1 },
                { buttonId: "convert", buttonText: { displayText: "🌐 Convert Menu" }, type: 1 },
                { buttonId: "group", buttonText: { displayText: "📖 Group Menu" }, type: 1 },
                { buttonId: "fun", buttonText: { displayText: "🎭 Fun Menu" }, type: 1 },
                { buttonId: "search", buttonText: { displayText: "🔍 Search Menu" }, type: 1 },
                { buttonId: "news", buttonText: { displayText: "📰 News Menu" }, type: 1 },
                { buttonId: "other", buttonText: { displayText: "🔧 Other Menu" }, type: 1 }
            ],
            headerType: 4 // Allows an image as the header
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});