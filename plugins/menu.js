const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "📜",
    desc: "Display command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        // Menu categories with icons
        let menu = {
            main: { title: "🔹 Main Commands", list: "" },
            download: { title: "📥 Download Commands", list: "" },
            fun: { title: "🎉 Fun Commands", list: "" },
            group: { title: "👥 Group Commands", list: "" },
            owner: { title: "👑 Owner Commands", list: "" },
            convert: { title: "🔄 Convert Commands", list: "" },
            search: { title: "🔍 Search Commands", list: "" },
            other: { title: "⚙️ Other Commands", list: "" },
            news: { title: "📰 News Commands", list: "" }
        };

        // Categorizing commands
        for (let cmd of commands) {
            if (cmd.pattern && !cmd.dontAddCommandList) {
                if (menu[cmd.category]) {
                    menu[cmd.category].list += `🔹 *${cmd.pattern}*\n`;
                } else {
                    menu.other.list += `🔹 *${cmd.pattern}*\n`;
                }
            }
        }

        // Building the final menu
        let menuText = `
┏━━━━━━━━━━━━━━━┓
┃  🔥 *COMMAND MENU* 🔥  ┃
┗━━━━━━━━━━━━━━━┛

👋 Hello, *${pushname}*!  
Welcome to *Mr. Naduwa's Bot* 🤖  

━━━━━━━━━━━━━━━━━━━━
${Object.values(menu).map(section => section.list ? `*${section.title}*\n${section.list}` : "").join("\n")}
━━━━━━━━━━━━━━━━━━━━

⚡ *Powered by Mr. Naduwa* ⚡
`;

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: menuText }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});