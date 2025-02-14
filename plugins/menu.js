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

        // 🔔 Greeting Message
        function getTimeGreeting() {
            let hours = new Date().getHours();
            if (hours < 12) return "🌅 𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘";
            else if (hours < 18) return "☀️ 𝔾𝕠𝕠𝕕 𝔸𝕗𝕥𝕖𝕣𝕟𝕠𝕠𝕟";
            else return "🌙 𝔾𝕠𝕠𝕕 𝕖𝕧𝕖𝕟𝕚𝕟𝕘";
        }

        // 🏆 Stylish Menu
        let madeMenu = `╭───❒ *${getTimeGreeting()}* ❒───╮

        *🌟 𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕄𝕣.ℕ𝕒𝕕𝕦𝕨𝕒 𝕄𝕖𝕟𝕦 🌟*
        
       

        > *ℙ𝕠𝕨𝕖𝕣𝕖𝕕 𝔹𝕪 𝕄𝕣.ℕ𝕒𝕕𝕦𝕨𝕒 🤖*
        
        ╰───❒ *Enjoy Your Experience!* ❒───╯
        `;

        // Button Menu
        const buttonMessage = {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu,
            footer: 'Click on any button below to explore:',
            buttons: [
                { buttonId: 'main', buttonText: { displayText: 'Main Menu' }, type: 1 },
                { buttonId: 'download', buttonText: { displayText: 'Download Menu' }, type: 1 },
                { buttonId: 'fun', buttonText: { displayText: 'Fun Menu' }, type: 1 },
                { buttonId: 'group', buttonText: { displayText: 'Group Menu' }, type: 1 },
                { buttonId: 'owner', buttonText: { displayText: 'Owner Menu' }, type: 1 },
                { buttonId: 'other', buttonText: { displayText: 'Other Options' }, type: 1 }
            ],
            headerType: 4
        };

        await conn.sendMessage(from, buttonMessage, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Handle button clicks
conn.on('interactive', async (mek) => {
    const { selectedButtonId } = mek.message;
    
    let submenuMessage = '';
    
    // Send the corresponding submenu based on the button clicked
    switch (selectedButtonId) {
        case 'main':
            submenuMessage = '📜 *Main Menu*\n' + menu.main;
            break;
        case 'download':
            submenuMessage = '📥 *Download Menu*\n' + menu.download;
            break;
        case 'fun':
            submenuMessage = '🎉 *Fun Menu*\n' + menu.fun;
            break;
        case 'group':
            submenuMessage = '👥 *Group Menu*\n' + menu.group;
            break;
        case 'owner':
            submenuMessage = '👑 *Owner Menu*\n' + menu.owner;
            break;
        case 'other':
            submenuMessage = '💡 *Other Options*\n' + menu.other;
            break;
        default:
            submenuMessage = 'Sorry, no menu found!';
    }

    // Send submenu response
    await conn.sendMessage(from, {
        text: submenuMessage
    }, { quoted: mek });
});