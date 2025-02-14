const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🔥",
    desc: "Displays the full command menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, pushname, reply }) => {
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

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `🔹 *${commands[i].pattern}*\n`;
            }
        }

        let madeMenu = `
╭━━━━━━━✦ *🤖 MR.NADUWA- 𝗩𝟭* ✦━━━━━━━╮
┃  👋  𝗛𝗲𝗹𝗹𝗼, ${pushname}!  
┃  🚀  𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁  
┃  📌  𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁  
╰━━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🔥 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🔥 ❱ ━━━╮
${menu.main || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🎵 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🎵 ❱ ━━━╮
${menu.download || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 😆 𝗙𝗨𝗡 & 𝗚𝗔𝗠𝗘𝗦 😆 ❱ ━━━╮
${menu.fun || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🏘️ 𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🏘️ ❱ ━━━╮
${menu.group || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 👑 𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 👑 ❱ ━━━╮
${menu.owner || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🛠️ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥𝗦 🛠️ ❱ ━━━╮
${menu.convert || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🔍 𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🔍 ❱ ━━━╮
${menu.search || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 📰 𝗡𝗘𝗪𝗦 & 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 📰 ❱ ━━━╮
${menu.news || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

╭━━━ ❰ 🔧 𝗢𝗧𝗛𝗘𝗥 𝗧𝗢𝗢𝗟𝗦 🔧 ❱ ━━━╮
${menu.other || '🚫 No commands available'}
╰━━━━━━━━━━━━━━━━━╯

💡 *Tip:* Use *!commandname* to execute any command.  
🔥 *Powerful AI-Powered Bot for WhatsApp*  
🌐 *Stay Connected, Stay Smart!*

🔗 *Powered by: [H.A.NADUN SADISHKA]*  
📅 *Version: 1.0.0 | Updated: 2025*
`;

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`⚠️ Error: ${e.message}`);
    }
});