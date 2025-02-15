const config = require('../config');
const { cmd, commands } = require('../command');
const baileys = require("@whiskeysockets/baileys");

cmd({
    pattern: "menu",
    react: "⚡",
    desc: "Get the command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, sender, reply, isAdmin }) => {
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
                menu[commands[i].category] += `*🔹* ${commands[i].pattern}\n`;
            }
        }

        let userMode = isAdmin ? "👑 Admin Mode" : "👤 User Mode";

        // Animated Dots Effect
        const animatedDots = ["•", "••", "•••", "••••", "✅"];

        // Loading Messages
        const loadingMessages = [
            "⏳ Preparing Your Menu...",
            "🚀 Fetching Commands...",
            "✨ Almost Ready...",
            "🔍 Gathering Data...",
            "✅ Done! Displaying Menu..."
        ];

        // Send typing indicator & loading animation
        await conn.sendPresenceUpdate('composing', from);
        for (let i = 0; i < animatedDots.length; i++) {
            await reply(`*Loading ${animatedDots[i]}*`);
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        for (let msg of loadingMessages) {
            await reply(msg);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Custom Button-Based Menu
        let menuText = `╭━━❰ *MR.NADUWA-V1* ❱━━╮\n\n`
            + `🎭 *Hello ${pushname}*\n`
            + `⚙️ Mode: *${userMode}*\n`
            + `📅 Date: *${new Date().toLocaleDateString()}*\n\n`
            + `╰━━━━━━━━━━━━━━━━━╯\n\n`
            + `📌 *Trending Commands:*\n`
            + `🔹 !sticker - Convert images to stickers\n`
            + `🔹 !ytmp3 - Download YouTube audio\n`
            + `🔹 !qr - Generate QR codes\n\n`
            + `🔰 *Categories:*`;

        let buttons = [
            { buttonId: "download", buttonText: { displayText: "📥 Download" }, type: 1 },
            { buttonId: "fun", buttonText: { displayText: "🎭 Fun" }, type: 1 },
            { buttonId: "main", buttonText: { displayText: "🔧 Main" }, type: 1 },
            { buttonId: "group", buttonText: { displayText: "👥 Group" }, type: 1 },
            { buttonId: "owner", buttonText: { displayText: "👑 Owner" }, type: 1 },
            { buttonId: "convert", buttonText: { displayText: "🔄 Convert" }, type: 1 },
            { buttonId: "search", buttonText: { displayText: "🔍 Search" }, type: 1 },
            { buttonId: "other", buttonText: { displayText: "📜 Other" }, type: 1 },
            { buttonId: "news", buttonText: { displayText: "📰 News" }, type: 1 }
        ];

        let buttonMessage = {
            text: menuText,
            footer: "🔥 Powered by MR.NADUWA-V1",
            buttons: buttons,
            headerType: 1
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});