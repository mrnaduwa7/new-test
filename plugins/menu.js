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
        
        const menu1 = `*🔹 DOWNLOAD COMMANDS:*\n${menu.download || "No commands found"}\n`
        const menu2 = `*🎭 FUN COMMANDS:*\n${menu.fun || "No commands found"}\n`
        const menu3 = `*🔧 MAIN COMMANDS:*\n${menu.main || "No commands found"}\n`
        const menu4 = `*👥 GROUP COMMANDS:*\n${menu.group || "No commands found"}\n`
        const menu5 = `*👑 OWNER COMMANDS:*\n${menu.owner || "No commands found"}\n`
        const menu6 = `*🔄 CONVERT COMMANDS:*\n${menu.convert || "No commands found"}\n`
        const menu7 = `*🔍 SEARCH COMMANDS:*\n${menu.search || "No commands found"}\n`
        const menu8 = `*📜 OTHER COMMANDS:*\n${menu.other || "No commands found"}\n`
        const menu9 = `*📰 NEWS COMMANDS:*\n${menu.news || "No commands found"}\n\n*🔥 POWERED BY MR NADUWA 🔥*`

const load = 'loading'
        // Send typing indicator & messages sequentially
        for (let section of sections) {
            await conn.sendPresenceUpdate('composing', from); // Show typing indicator
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for effect
           return await reply(section);
            return await reply(load);
           return await reply(menu1);
           return await reply(load);
           return await reply(menu2);
           return await reply(load);
           return await reply(menu3);
           return await reply(load);
           return await reply(menu4);
           return await reply(load);
           return await reply(menu5);
           return await reply(load);
          return  await reply(menu6);
           return await reply(load);
           return await reply(menu7);
           return await reply(load);
           return await reply(menu8);
          return  await reply(load);
          return  await reply(menu9);
        }

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});