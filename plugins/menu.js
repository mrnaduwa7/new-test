const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "✅",
    desc: "Show the main menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let buttonMessage = {
            image: { url: config.ALIVE_IMG },
            caption: `🔥 *𝐌𝐑.𝐍𝐀𝐃𝐔𝐖𝐀-𝐕𝟏* 🔥\n\n👋 Hello, *${pushname}*\n📅 Date: *${new Date().toLocaleDateString()}*\n🕒 Time: *${new Date().toLocaleTimeString()}*\n\n🎛 *Choose a Menu Below:*`,
            footer: "✨ Powered by MR NADUWA",
            buttons: [
                { buttonId: "menu_owner", buttonText: { displayText: "👨‍💻 Owner Menu" }, type: 1 },
                { buttonId: "menu_download", buttonText: { displayText: "📥 Download Menu" }, type: 1 },
                { buttonId: "menu_movie", buttonText: { displayText: "🎬 Movie Menu" }, type: 1 },
                { buttonId: "menu_convert", buttonText: { displayText: "🌐 Convert Menu" }, type: 1 },
                { buttonId: "menu_group", buttonText: { displayText: "📖 Group Menu" }, type: 1 },
                { buttonId: "menu_fun", buttonText: { displayText: "🎭 Fun Menu" }, type: 1 },
                { buttonId: "menu_search", buttonText: { displayText: "🔍 Search Menu" }, type: 1 },
                { buttonId: "menu_news", buttonText: { displayText: "📰 News Menu" }, type: 1 },
                { buttonId: "menu_other", buttonText: { displayText: "🔧 Other Menu" }, type: 1 }
            ],
            headerType: 4
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// ✅ **Handling Button Clicks**
cmd({
    pattern: "",
    fromMe: false
}, async (conn, mek, m, { from, isButton, buttonId, reply }) => {
    try {
        if (!isButton) return; // Ensure it's a button interaction

        let menus = {
            menu_owner: "👨‍💻 *Owner Menu*\n- !owner1\n- !owner2\n...",
            menu_download: "📥 *Download Menu*\n- !ytmp3\n- !ytmp4\n...",
            menu_movie: "🎬 *Movie Menu*\n- !imdb\n- !netflix\n...",
            menu_convert: "🌐 *Convert Menu*\n- !toimg\n- !tomp3\n...",
            menu_group: "📖 *Group Menu*\n- !kick\n- !add\n...",
            menu_fun: "🎭 *Fun Menu*\n- !joke\n- !meme\n...",
            menu_search: "🔍 *Search Menu*\n- !google\n- !wiki\n...",
            menu_news: "📰 *News Menu*\n- !news\n- !weather\n...",
            menu_other: "🔧 *Other Menu*\n- !ping\n- !help\n..."
        };

        if (menus[buttonId]) {
            await reply(menus[buttonId]); // Send the correct menu when a button is clicked
        }
    } catch (e) {
        console.log(e);
        reply(`Error handling button: ${e}`);
    }
});