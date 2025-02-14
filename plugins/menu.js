const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "menu",
    react: "📜",
    desc: "Interactive Carousel Menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const mainMenu = {
            text: "📜 *Main Menu* 📜\nChoose a category below:",
            footer: "🔄 Click a button to navigate",
            buttons: [
                { buttonId: "menu_download", buttonText: { displayText: "📥 Download" }, type: 1 },
                { buttonId: "menu_fun", buttonText: { displayText: "🎭 Fun" }, type: 1 },
                { buttonId: "menu_tools", buttonText: { displayText: "🛠 Tools" }, type: 1 }
            ],
            headerType: 1
        };

        await conn.sendMessage(from, mainMenu, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Submenu handler
cmd({
    on: "text",
}, async (conn, mek, m, { from, body, reply }) => {
    try {
        if (body.startsWith("menu_")) {
            let menuType = body.split("_")[1];

            let subMenu = {
                text: `📜 *${menuType.toUpperCase()} Menu* 📜\nChoose an option below:`,
                footer: "🔄 Click a button to navigate",
                buttons: [],
                headerType: 1
            };

            if (menuType === "download") {
                subMenu.buttons = [
                    { buttonId: "cmd_ytdl", buttonText: { displayText: "🎞 YouTube DL" }, type: 1 },
                    { buttonId: "cmd_instadl", buttonText: { displayText: "📷 Instagram DL" }, type: 1 },
                    { buttonId: "menu", buttonText: { displayText: "🔙 Back to Menu" }, type: 1 }
                ];
            } else if (menuType === "fun") {
                subMenu.buttons = [
                    { buttonId: "cmd_joke", buttonText: { displayText: "😂 Joke" }, type: 1 },
                    { buttonId: "cmd_meme", buttonText: { displayText: "🤣 Meme" }, type: 1 },
                    { buttonId: "menu", buttonText: { displayText: "🔙 Back to Menu" }, type: 1 }
                ];
            } else if (menuType === "tools") {
                subMenu.buttons = [
                    { buttonId: "cmd_calc", buttonText: { displayText: "🧮 Calculator" }, type: 1 },
                    { buttonId: "cmd_qr", buttonText: { displayText: "📸 QR Code" }, type: 1 },
                    { buttonId: "menu", buttonText: { displayText: "🔙 Back to Menu" }, type: 1 }
                ];
            }

            await conn.sendMessage(from, subMenu, { quoted: mek });
        }
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});