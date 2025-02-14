const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        // Step 1: Show Loading Message
        let loadingMessage = await conn.sendMessage(from, { text: "🔄 *Loading menu...*" }, { quoted: mek });

        // Step 2: Show Animated Loading Effect
        let loadingStages = ["⌛ Loading", "⌛ Loading.", "⌛ Loading..", "⌛ Loading..."];
        for (let i = 0; i < loadingStages.length; i++) {
            await conn.sendMessage(from, { text: loadingStages[i] }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay
        }

        // Step 3: Build Command List Categories with Buttons
        let buttons = [];
        let menuText = `*🔹 Hello ${pushname}, Welcome to MR.NADUWA Bot!* 🔹\n\n`;

        let categories = {
            main: "📌 Main Commands",
            download: "📥 Download Commands",
            fun: "🎭 Fun Commands",
            group: "👥 Group Commands",
            owner: "👑 Owner Commands",
            convert: "🔄 Convert Commands",
            search: "🔎 Search Commands",
            other: "📚 Other Commands",
            news: "📰 News Commands"
        };

        for (let category in categories) {
            let categoryCommands = commands.filter(cmd => cmd.category === category && cmd.pattern && !cmd.dontAddCommandList);
            
            if (categoryCommands.length > 0) {
                menuText += `\n*╭───❒ ${categories[category]} ❒───╮*\n`;

                for (let cmd of categoryCommands) {
                    let buttonId = cmd.pattern;
                    menuText += `*➤* ${cmd.pattern}\n`;
                    buttons.push({ buttonId: buttonId, buttonText: { displayText: `🔹 ${cmd.pattern}` }, type: 1 });
                }

                menuText += `*╰───────────────────────❒*\n`;
            }
        }

        // Step 4: Send Menu with Buttons
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: menuText,
            footer: "Choose a command below 👇",
            buttons: buttons,
            headerType: 4
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});