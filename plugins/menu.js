const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get full command list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, pushname, reply }) => {
    try {
        // Organizing Commands by Category
        let menu = {
            main: '', download: '', fun: '', group: '',
            owner: '', convert: '', search: '', other: '', news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*🔹* ${commands[i].pattern}\n`;
            }
        }

        // Menu Layout
        let madeMenu = `╭─────────────────❒\n`
            + `*👋 Hi ${pushname}, Welcome to MR.NADUWA-V1*\n\n`
            + `📌 *Version:* 1.0.0\n`
            + `⚙️ *Runtime:* Online ✅\n`
            + `📍 *Platform:* Baileys API\n\n`
            + `🍭 *Have A Nice Day* 🍭\n`
            + `⚖️ *Powered By - MR.NADUWA-V1* 💚\n`
            + `╰─────────────────❒\n\n`
            + `┏━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
            + `*📜 Full Command List:*\n`
            + `┗━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
            + `📂 *Download Commands:*\n${menu.download}\n`
            + `🎭 *Fun Commands:*\n${menu.fun}\n`
            + `🛠️ *Main Commands:*\n${menu.main}\n`
            + `👥 *Group Commands:*\n${menu.group}\n`
            + `👑 *Owner Commands:*\n${menu.owner}\n`
            + `🔄 *Convert Commands:*\n${menu.convert}\n`
            + `🔎 *Search Commands:*\n${menu.search}\n`
            + `🔧 *Other Commands:*\n${menu.other}\n`
            + `📰 *News Commands:*\n${menu.news}\n\n`
            + `🔹 *Use Buttons Below for Quick Navigation!*\n`;

        // Buttons for Dynamic Menu Navigation
        const buttons = [
            { buttonId: 'menu_main', buttonText: { displayText: '📌 MAIN MENU' }, type: 1 },
            { buttonId: 'menu_download', buttonText: { displayText: '📂 DOWNLOADS' }, type: 1 },
            { buttonId: 'menu_fun', buttonText: { displayText: '🎭 FUN' }, type: 1 },
            { buttonId: 'menu_search', buttonText: { displayText: '🔎 SEARCH' }, type: 1 },
            { buttonId: 'menu_other', buttonText: { displayText: '🔧 OTHERS' }, type: 1 }
        ];

        // Send Menu as an Image with Buttons
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            footer: 'MR.NADUWA-V1 🤖',
            buttons: buttons,
            headerType: 4
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});