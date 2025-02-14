const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list",
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
                menu[commands[i].category] += `⚡ ${commands[i].pattern}\n`;
            }
        }

        // 🕒 Live Clock
        function getLiveClock() {
            let now = new Date();
            return `🕒 ${now.toLocaleTimeString('en-US', { hour12: true })}`;
        }

        // ⏳ Countdown Timer
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

        // 🔔 Greeting Message
        function getTimeGreeting() {
            let hours = new Date().getHours();
            if (hours < 12) return "🌅 𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘";
            else if (hours < 18) return "☀️ 𝔾𝕠𝕠𝕕 𝔸𝕗𝕥𝕖𝕣𝕟𝕠𝕠𝕟";
            else return "🌙 𝔾𝕠𝕠𝕕 𝔼𝕧𝕖𝕟𝕚𝕟𝕘";
        }

        // 🏆 Stylish Menu
        let madeMenu = `╭───❒ *${getTimeGreeting()}* ❒───╮

        *🌟 𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕄𝕣.ℕ𝕒𝕕𝕦𝕨𝕒 𝕄𝕖𝕟𝕦 🌟*
        
        🕒 *Time Now:* ${getLiveClock()}
        ${getCountdown()}

        📌 *𝔽𝕦𝕝𝕝 ℂ𝕠𝕞𝕞𝕒𝕟𝕕 𝕃𝕚𝕤𝕥*
        ${menu.main}

        🎵 *𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕄𝕖𝕟𝕦*
        ${menu.download}

        😂 *𝔽𝕦𝕟 𝕄𝕖𝕟𝕦*
        ${menu.fun}

        👥 *𝔾𝕣𝕠𝕦𝕡 𝕄𝕖𝕟𝕦*
        ${menu.group}

        💡 *𝕆𝕥𝕙𝕖𝕣𝕤*
        ${menu.other}

        📅 *𝕆𝕨𝕟𝕖𝕣 𝕄𝕖𝕟𝕦*
        ${menu.owner}

        > *ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝔹𝕪 𝕄𝕣.ℕ𝕒𝕕𝕦𝕨𝕒 🤖*
        
        ╰───❒ *Enjoy Your Experience!* ❒───╯
        `;

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});