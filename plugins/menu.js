const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
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

        // Populate menu categories dynamically
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
            }
        }

        let sections = [
            `*╭─────────────────❒*\n\n*⇆ ʜɪɪ ${pushname} ⇆*\n\n*┕─────────────────❒*`
        ];
        
        const menu1 = `*🔹 DOWNLOAD COMMANDS:*\n${menu.download || "No commands found"}\n`;
        const menu2 = `*🎭 FUN COMMANDS:*\n${menu.fun || "No commands found"}\n`;
        const menu3 = `*🔧 MAIN COMMANDS:*\n${menu.main || "No commands found"}\n`;
        const menu4 = `*👥 GROUP COMMANDS:*\n${menu.group || "No commands found"}\n`;
        const menu5 = `*👑 OWNER COMMANDS:*\n${menu.owner || "No commands found"}\n`;
        const menu6 = `*🔄 CONVERT COMMANDS:*\n${menu.convert || "No commands found"}\n`;
        const menu7 = `*🔍 SEARCH COMMANDS:*\n${menu.search || "No commands found"}\n`;
        const menu8 = `*📜 OTHER COMMANDS:*\n${menu.other || "No commands found"}\n`;
        const menu9 = `*📰 NEWS COMMANDS:*\n${menu.news || "No commands found"}\n\n*🔥 POWERED BY MR NADUWA 🔥*`;

        const progressBar = [
            "█▒▒▒▒▒▒▒▒▒ 10%",
            "███▒▒▒▒▒▒▒ 30%",
            "█████▒▒▒▒▒ 50%",
            "███████▒▒▒ 70%",
            "█████████▒ 90%",
            "██████████ 100%"
        ];

        const emojiEffects = ["⚡", "🔥", "🚀", "⏳", "✅", "🔄"];

        // Send typing indicator & messages sequentially
        for (let section of sections) {
            await conn.sendPresenceUpdate('composing', from); // Show typing indicator
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for effect
            await reply(section);

            for (let i = 0; i < progressBar.length; i++) {
                await reply(progressBar[i]);
                await new Promise(resolve => setTimeout(resolve, 700)); // Simulate loading effect
            }

            await reply(menu1);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu2);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu3);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu4);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu5);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu6);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu7);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu8);
            await reply(emojiEffects[Math.floor(Math.random() * emojiEffects.length)]);
            await reply(menu9);
        }

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});