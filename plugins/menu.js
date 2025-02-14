const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        let menu = {
            main: '', download: '', fun: '', group: '', 
            owner: '', convert: '', search: '', other: '', news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
            }
        }

        // Clock Countdown
        function getCountdown() {
            let now = new Date();
            let target = new Date();
            target.setHours(23, 59, 59, 999);
            let diff = target - now;
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            return `⏳ *Remaining Time:* ${hours}h ${minutes}m ${seconds}s`;
        }

        // Morning / Evening / Night
        function getTimePeriod() {
            let hours = new Date().getHours();
            if (hours < 12) return "🌅 𝕌𝕕𝕒𝕤𝕒𝕟𝕒";
            else if (hours < 18) return "☀️ 𝔻𝕒𝕨𝕒𝕝";
            else return "🌙 ℝ𝕒𝕚";
        }

        let madeMenu = `*╭── ❒ ${getTimePeriod()} ❒ ──╮*
        
*🌟 𝙃𝙚𝙡𝙡𝙤, 𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙈𝙧.𝙉𝙖𝙙𝙪𝙬𝙖 𝘽𝙤𝙩 𝙈𝙚𝙣𝙪! 🌟*

${getCountdown()}

*📌 𝔽𝕦𝕝𝕝 ℂ𝕠𝕞𝕞𝕒𝕟𝕕 𝕃𝕚𝕤𝕥 📌*
${menu.main}

*🎵 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕄𝕖𝕟𝕦 🎵*
${menu.download}

*😂 𝔽𝕦𝕟 𝕄𝕖𝕟𝕦 😂*
${menu.fun}

*👥 𝔾𝕣𝕠𝕦𝕡 𝕄𝕖𝕟𝕦 👥*
${menu.group}

*💡 𝕆𝕥𝕙𝕖𝕣𝕤 💡*
${menu.other}

*📅 𝕆𝕨𝕟𝕖𝕣 𝕄𝕖𝕟𝕦 📅*
${menu.owner}

> *ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝔹𝕪 𝕄𝕣.ℕ𝕒𝕕𝕦𝕨𝕒 🤖*
        
╰─ ❒ *Enjoy Your Experience!* ❒ ─╯
`;

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});