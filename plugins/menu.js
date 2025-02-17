const config = require('../config');
const { cmd, commands } = require('../command');
const moment = require('moment-timezone');

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "Get the list of all commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, {
    from, pushname, reply
}) => {
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
                menu[commands[i].category] += `┋ ${commands[i].pattern}\n`;
            }
        }

        // Get the current time, date, and day of the week
        const time = moment().tz("Asia/Colombo").format("HH:mm:ss");
        const date = moment().tz("Asia/Colombo").format("DD/MM/YYYY");
        const dayOfWeek = moment().tz("Asia/Colombo").format("dddd");

        let greeting = "Good Night 🌌"; // Default greeting
        
        if (time < "05:00:00") {
            greeting = "Good Morning 🌄";
        } else if (time < "11:00:00") {
            greeting = "Good Morning 🌄";
        } else if (time < "15:00:00") {
            greeting = "Good Afternoon 🌅";
        } else if (time < "19:00:00") {
            greeting = "Good Evening 🌃";
        }

        let madeMenu = `╭─────────────────────────❒
        
        ➤ ʜɪ ${pushname} 👋🏻 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʀ.ɴᴀᴅᴜᴡᴀ-ᴠ1
        
        ┕─────────────────────────❒

        🌟 ᴄᴏᴍᴍᴀɴᴅs ᴄᴀᴛᴇɢᴏʀɪᴇs 🌟

        ╭─────────────────────────❒
        │ 🔹 *Download* Commands
        ╰─────────────────────────❒
        ${menu.download}
        
        ╭─────────────────────────❒
        │ 🔹 *Fun* Commands
        ╰─────────────────────────❒
        ${menu.fun}
        
        ╭─────────────────────────❒
        │ 🔹 *Main* Commands
        ╰─────────────────────────❒
        ${menu.main}
        
        ╭─────────────────────────❒
        │ 🔹 *Group* Commands
        ╰─────────────────────────❒
        ${menu.group}
        
        ╭─────────────────────────❒
        │ 🔹 *Owner* Commands
        ╰─────────────────────────❒
        ${menu.owner}
        
        ╭─────────────────────────❒
        │ 🔹 *Convert* Commands
        ╰─────────────────────────❒
        ${menu.convert}
        
        ╭─────────────────────────❒
        │ 🔹 *Search* Commands
        ╰─────────────────────────❒
        ${menu.search}
        
        ╭─────────────────────────❒
        │ 🔹 *Other* Commands
        ╰─────────────────────────❒
        ${menu.other}
        
        ╭─────────────────────────❒
        │ 🔹 *News* Commands
        ╰─────────────────────────❒
        ${menu.news}

        🛠️ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɴᴀᴅᴜᴡᴀ

        🌟 ᴅᴇᴠᴇʟᴏᴘᴇᴅ ᴡɪᴛʜ ❤️ ʙʏ ᴍʀ ɴᴀᴅᴜᴡᴀ 🌟

        ┏━━━━━━━━━━━━━━━━━━━━━━━
        🕰️ *Current Time*: ${time}
        📅 *Date*: ${date}
        📆 *Day*: ${dayOfWeek}
        🤖 *Greeting*: ${greeting}
        ┛━━━━━━━━━━━━━━━━━━━━━━━
        `;

        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});