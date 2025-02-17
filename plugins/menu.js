import moment from 'moment-timezone';
import os from 'os';
const config = require('../config')
const {cmd , commands} = require('../command');

// Get system memory details
const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB';
const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB';

// Uptime calculation
const uptime = process.uptime();
const days = Math.floor(uptime / (24 * 3600));
const hours = Math.floor((uptime % (24 * 3600)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

// Greetings based on time
const timeNow = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "Good Night 🌌";
if (timeNow < "05:00:00") pushwish = "Good Morning 🌄";
else if (timeNow < "11:00:00") pushwish = "Good Morning 🌄";
else if (timeNow < "15:00:00") pushwish = "Good Afternoon 🌅";
else if (timeNow < "18:00:00") pushwish = "Good Evening 🌃";

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let menu = {
            main: '', download: '', fun: '', group: '',
            owner: '', convert: '', search: '', other: '', news: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `┋ ${commands[i].pattern}\n`;
            }
        }

        let madeMenu = `╭──────────❒
│ ${pushwish}, *${pushname}* 👋
│ 🕒 Time: ${timeNow}
│ 💾 Total Memory: ${totalMemory}
│ 🚀 Free Memory: ${freeMemory}
│ ⏳ Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s
╰──────────❒

┏━━━━━━━━━━━━━━━━━━━
┃ *🔥 MR.NADUWA-V1 COMMANDS 🔥*
┗━━━━━━━━━━━━━━━━━━━

╭───────────────❒
│ 🌐 *Main Commands*
╰───────────────❒
${menu.main}

╭───────────────❒
│ 📥 *Download Commands*
╰───────────────❒
${menu.download}

╭───────────────❒
│ 🎭 *Fun Commands*
╰───────────────❒
${menu.fun}

╭───────────────❒
│ 👥 *Group Commands*
╰───────────────❒
${menu.group}

╭───────────────❒
│ 👑 *Owner Commands*
╰───────────────❒
${menu.owner}

╭───────────────❒
│ 🔄 *Convert Commands*
╰───────────────❒
${menu.convert}

╭───────────────❒
│ 🔍 *Search Commands*
╰───────────────❒
${menu.search}

╭───────────────❒
│ 🔧 *Other Commands*
╰───────────────❒
${menu.other}

╭───────────────❒
│ 📰 *News Commands*
╰───────────────❒
${menu.news}

🔹 *Powered by MR.NADUWA* 🔹`;

        await conn.sendMessage(from, { 
            image: { url: config.ALIVE_IMG }, 
            caption: madeMenu 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});