const config = require('../config');
const { cmd, commands } = require('../command');

cmd(
  {
    pattern: 'menu',
    react: '🇱🇰',
    desc: 'Get command list',
    category: 'main',
    filename: __filename,
  },
  async (conn, mek, m, { from, pushname, isAdmins, isOwner, args }) => {
    try {
      let lang = config.LANGUAGE || "en"; // Default language
      let themes = ["🔵 Blue", "🔴 Red", "🟢 Green", "🟣 Purple", "⚫ Black"];
      let selectedTheme = config.THEME || "🔵 Blue";

      let greetings = {
        en: ["Good Morning", "Good Afternoon", "Good Evening"],
        si: ["සුභ උදෑසනක්", "සුභ දවසක්", "සුභ සැන්දෑවක්"],
        ta: ["காலை வணக்கம்", "மதிய வணக்கம்", "மாலை வணக்கம்"],
      };

      let hour = new Date().getHours();
      let greet =
        hour < 12 ? greetings[lang][0] :
        hour < 18 ? greetings[lang][1] :
        greetings[lang][2];

      let mode = hour >= 18 || hour < 6 ? '🌙 Dark Mode' : '☀ Light Mode';

      let trendingCommands = ["play", "sticker", "ytmp3", "ytmp4", "gif"];
      let trendingList = trendingCommands.map((cmd) => `🔥 *${cmd}*`).join("\n");

      let userType = isOwner ? '👑 Owner' : isAdmins ? '🔰 Admin' : '👤 User';

      let mainMenu = `╭──────────────❒
👋 *${greet}, ${pushname}!*  
🔥 *Welcome to MR.NADUWA-V1*  
📌 *User Type: ${userType}*  
🎨 *Theme: ${selectedTheme}*  
🌍 *Language: ${lang.toUpperCase()}*  
🎭 *Mode: ${mode}*  
╰──────────────❒

📜 *Trending Commands:*  
${trendingList}  

📜 *Choose a Category:*  
🔹 Download  
🔹 Fun  
🔹 Main  
🔹 Group  
🔹 Owner  
🔹 Convert  
🔹 Search  
🔹 Other  
🔹 News  

📌 *Tap a button below to explore!*  
> *🔧 Powered by NADUWA*  
`;

      let buttons = [
        { buttonId: '.menu download', buttonText: { displayText: '📌 Download' }, type: 1 },
        { buttonId: '.menu fun', buttonText: { displayText: '📌 Fun' }, type: 1 },
        { buttonId: '.menu main', buttonText: { displayText: '📌 Main' }, type: 1 },
        { buttonId: '.menu group', buttonText: { displayText: '📌 Group' }, type: 1 },
        { buttonId: '.menu owner', buttonText: { displayText: '📌 Owner' }, type: 1 },
        { buttonId: '.menu convert', buttonText: { displayText: '📌 Convert' }, type: 1 },
        { buttonId: '.menu search', buttonText: { displayText: '📌 Search' }, type: 1 },
        { buttonId: '.menu other', buttonText: { displayText: '📌 Other' }, type: 1 },
        { buttonId: '.menu news', buttonText: { displayText: '📌 News' }, type: 1 },
        { buttonId: '.menu', buttonText: { displayText: '🔄 Refresh' }, type: 1 }
      ];

      let themeButtons = themes.map((t) => ({
        buttonId: `.theme ${t.split(" ")[1].toLowerCase()}`,
        buttonText: { displayText: t },
        type: 1,
      }));

      buttons = [...buttons, ...themeButtons];

      await conn.sendMessage(from, {
        image: { url: config.ALIVE_IMG || "https://i.imgur.com/AelfOJm.jpeg" }, // Default fallback image
        caption: mainMenu,
        footer: "📌 Tap a button below!",
        buttons: buttons,  // Changed to 'buttons' instead of 'templateButtons'
        headerType: 1,  // Changed from 4 to 1
    });

    } catch (e) {
      console.log(e);
      await conn.sendMessage(from, { text: `❌ Error: ${e}` });
    }
  }
);