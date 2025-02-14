const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get full command list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        let menu = {
            main: [],
            download: [],
            fun: [],
            group: [],
            owner: [],
            convert: [],
            search: [],
            other: [],
            news: []
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category].push({
                    title: `🔹 ${commands[i].pattern}`,
                    description: commands[i].desc || 'No description'
                });
            }
        }

        let sections = [
            {
                title: "📌 MAIN COMMANDS",
                rows: menu.main
            },
            {
                title: "📥 DOWNLOAD COMMANDS",
                rows: menu.download
            },
            {
                title: "😂 FUN COMMANDS",
                rows: menu.fun
            },
            {
                title: "📢 GROUP COMMANDS",
                rows: menu.group
            },
            {
                title: "👑 OWNER COMMANDS",
                rows: menu.owner
            },
            {
                title: "🔄 CONVERT COMMANDS",
                rows: menu.convert
            },
            {
                title: "🔍 SEARCH COMMANDS",
                rows: menu.search
            },
            {
                title: "🌐 NEWS COMMANDS",
                rows: menu.news
            },
            {
                title: "📚 OTHER COMMANDS",
                rows: menu.other
            }
        ];

        let menuText = `🌟 *Hello ${pushname}* 🌟\n\n`
            + "Welcome to *Mr.Naduwa V1* Bot! Here is the full command list:\n\n"
            + "📌 Select a category below to see available commands.";

        let buttonMessage = {
            text: menuText,
            footer: "🤖 Powered by Mr Naduwa",
            buttonText: "Select a Category",
            sections
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});