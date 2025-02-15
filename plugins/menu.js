const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get the full command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        let sections = [];

        // Define categories
        let categories = {
            "Main Commands": "main",
            "Download Commands": "download",
            "Fun Commands": "fun",
            "Group Commands": "group",
            "Owner Commands": "owner",
            "Convert Commands": "convert",
            "Search Commands": "search",
            "Other Commands": "other",
            "News Commands": "news"
        };

        // Generate category sections dynamically
        for (let [title, key] of Object.entries(categories)) {
            let commandsList = commands
                .filter(cmd => cmd.category === key && !cmd.dontAddCommandList)
                .map(cmd => ({ title: `⚡ ${cmd.pattern}`, rowId: `cmd_${cmd.pattern}` })) // Generates a button for each command
                .slice(0, 10); // Limit 10 items per list section

            if (commandsList.length > 0) {
                sections.push({
                    title: title,
                    rows: commandsList
                });
            }
        }

        let menuText = `👋 𝗛𝗲𝗹𝗹𝗼, *${pushname}*!  
Welcome to *MR.NADUWA-V1* WhatsApp Bot!  
Select a category below to explore available commands.`;

        // Sending List Message
        let catalogMessage = {
            text: menuText,
            footer: "Powered by MR.NADUWA-V1",
            title: "📜 Command Menu",
            buttonText: "Open Menu 📜",
            sections
        };

        await conn.sendMessage(from, catalogMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});