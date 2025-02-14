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
        // Step 1: Show Animated Loading Effect
        let loadingStages = ["⌛ Loading", "⌛ Loading.", "⌛ Loading..", "⌛ Loading..."];
        for (let i = 0; i < loadingStages.length; i++) {
            await conn.sendMessage(from, { text: loadingStages[i] }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay
        }

        // Step 2: Define Categories & Buttons
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

        let mainButtons = [
            { buttonId: "help", buttonText: { displayText: "❓ Help" }, type: 1 },
            { buttonId: "owner", buttonText: { displayText: "👤 Owner" }, type: 1 },
            { buttonId: "updates", buttonText: { displayText: "🔔 Updates" }, type: 1 }
        ];

        let categoryButtons = [];
        let menuText = `*🔹 Hello ${pushname}, Welcome to MR.NADUWA Bot!* 🔹\n\n`;

        // Step 3: Build Category-wise Command Lists & Buttons
        for (let category in categories) {
            let categoryCommands = commands.filter(cmd => cmd.category === category && cmd.pattern && !cmd.dontAddCommandList);
            
            if (categoryCommands.length > 0) {
                menuText += `\n*╭───❒ ${categories[category]} ❒───╮*\n`;

                for (let cmd of categoryCommands) {
                    let buttonId = cmd.pattern;
                    menuText += `*➤* ${cmd.pattern}\n`;
                    categoryButtons.push({ buttonId: buttonId, buttonText: { displayText: `🔹 ${cmd.pattern}` }, type: 1 });
                }

                menuText += `*╰───────────────────────❒*\n`;
            }
        }

        // Step 4: Send Menu with Buttons
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: menuText,
            footer: "Choose an option below 👇",
            buttons: [...categoryButtons, ...mainButtons],
            headerType: 4
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});

// 🛠️ Handle Button Click Events
cmd({
    pattern: "",
    onButton: true
},
async (conn, mek, m, { from, buttonId, reply }) => {
    try {
        if (!buttonId) return;

        // If it's a command button, execute that command
        let cmdToRun = commands.find(cmd => cmd.pattern === buttonId);
        if (cmdToRun) {
            reply(`🔹 Executing command: *${buttonId}*`);
            await cmdToRun.execute(conn, mek, m);
            return;
        }

        // Handle custom buttons
        switch (buttonId) {
            case "help":
                reply("❓ *Help Menu* \n\nHere’s how you can use the bot...");
                break;
            case "owner":
                reply("👤 *Owner Info* \n\nContact the owner at wa.me/1234567890");
                break;
            case "updates":
                reply("🔔 *Latest Updates* \n\nCheck out the latest bot updates here...");
                break;
            default:
                reply("❌ Unknown button clicked.");
        }

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});