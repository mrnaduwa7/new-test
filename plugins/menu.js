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
        // Create menu object
        const menuData = {
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

        // Populate menu data dynamically
        for (let cmd of commands) {
            if (cmd.pattern && !cmd.dontAddCommandList) {
                menuData[cmd.category].push(cmd.pattern);
            }
        }

        // Function to generate the menu message
        function renderMenu(menuData, pushname) {
            return `*╭───❒ MR.NADUWA-V1 MENU ❒───╮*

*👋 Hello, ${pushname}!*  
Welcome to *MR.NADUWA-V1* Command List  

📌 *Main Commands:*  
${menuData.main.length ? menuData.main.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

📥 *Download Commands:*  
${menuData.download.length ? menuData.download.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

🎉 *Fun Commands:*  
${menuData.fun.length ? menuData.fun.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

👥 *Group Commands:*  
${menuData.group.length ? menuData.group.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

👑 *Owner Commands:*  
${menuData.owner.length ? menuData.owner.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

🔄 *Convert Commands:*  
${menuData.convert.length ? menuData.convert.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

🔎 *Search Commands:*  
${menuData.search.length ? menuData.search.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

🛠 *Other Commands:*  
${menuData.other.length ? menuData.other.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

📰 *News Commands:*  
${menuData.news.length ? menuData.news.map(cmd => `- ${cmd}`).join('\n') : 'No commands available'}

*Powered by MR.NADUWA*
*╰───❒ END ❒───╯*`;
        }

        // Generate the menu text
        const menuText = renderMenu(menuData, pushname);

        // Send the menu with an image
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: menuText }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});