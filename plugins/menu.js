const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get cmd list",
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

        // Function to create a loading animation
        const loadingAnimation = async () => {
            let loadingText = "Loading";
            for (let i = 0; i < 5; i++) {
                await conn.sendPresenceUpdate('composing', from); // Show typing indicator
                await reply(loadingText + ".".repeat(i));
                await new Promise(resolve => setTimeout(resolve, 500)); // Small delay
            }
        };

        // Call the loading animation
        await loadingAnimation();

        // Menu sections with typing effects
        let sections = [
            `*╭─────────────────❒*\n\n*⇆ ʜɪɪ ${pushname} ⇆*\n\n*┕─────────────────❒*`,
            `*🔹 DOWNLOAD COMMANDS:*\n${menu.download || "No commands found"}\n`,
            `*🎭 FUN COMMANDS:*\n${menu.fun || "No commands found"}\n`,
            `*🔧 MAIN COMMANDS:*\n${menu.main || "No commands found"}\n`,
            `*👥 GROUP COMMANDS:*\n${menu.group || "No commands found"}\n`,
            `*👑 OWNER COMMANDS:*\n${menu.owner || "No commands found"}\n`,
            `*🔄 CONVERT COMMANDS:*\n${menu.convert || "No commands found"}\n`,
            `*🔍 SEARCH COMMANDS:*\n${menu.search || "No commands found"}\n`,
            `*📜 OTHER COMMANDS:*\n${menu.other || "No commands found"}\n`,
            `*📰 NEWS COMMANDS:*\n${menu.news || "No commands found"}\n\n*🔥 POWERED BY MR NADUWA 🔥*`
        ];

        // Send menu sections with typing effects
        for (let section of sections) {
            await conn.sendPresenceUpdate('composing', from); // Show typing indicator
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for effect
            await reply(section);
        }

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});