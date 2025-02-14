const config = require('../config');
const { cmd } = require('../command');

cmd(
  {
    pattern: 'menu',
    react: '📜',
    desc: 'Get full command list',
    category: 'main',
    filename: __filename,
  },
  async (conn, mek, m, { from, pushname, isAdmins, isOwner }) => {
    try {
      let lang = config.LANGUAGE || "en";
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

      let userType = isOwner ? '👑 Owner' : isAdmins ? '🔰 Admin' : '👤 User';

      let sections = [
        {
          title: "📂 Categories",
          rows: [
            { title: "📥 Download", rowId: ".menu download", description: "Download media & files" },
            { title: "😂 Fun", rowId: ".menu fun", description: "Fun commands & memes" },
            { title: "🎭 Main", rowId: ".menu main", description: "Core commands" },
            { title: "👥 Group", rowId: ".menu group", description: "Group management tools" },
            { title: "👑 Owner", rowId: ".menu owner", description: "Owner-only commands" },
            { title: "🛠 Convert", rowId: ".menu convert", description: "Convert files & formats" },
            { title: "🔍 Search", rowId: ".menu search", description: "Web & media search" },
            { title: "🛑 Other", rowId: ".menu other", description: "Miscellaneous commands" },
            { title: "📰 News", rowId: ".menu news", description: "Latest news & updates" }
          ]
        },
        {
          title: "🎨 Themes",
          rows: themes.map(t => ({ title: t, rowId: `.theme ${t.split(" ")[1].toLowerCase()}` }))
        },
        {
          title: "⚙ Bot Settings",
          rows: [
            { title: "🔄 Refresh Menu", rowId: ".menu", description: "Reload the menu" },
            { title: "📢 Announcements", rowId: ".news", description: "Latest bot updates" },
            { title: "📜 Help & Support", rowId: ".help", description: "Get bot usage help" }
          ]
        }
      ];

      let listMessage = {
        text: `👋 *${greet}, ${pushname}!*  
🔥 *Welcome to MR.NADUWA-V1*  
📌 *User Type: ${userType}*  
🎨 *Theme: ${selectedTheme}*  
🌍 *Language: ${lang.toUpperCase()}*  
🎭 *Mode: ${mode}*  

📜 *Choose a category below:*`,
        footer: "🔧 Powered by MR.NADUWA-V1",
        title: "📜 MR.NADUWA-V1 Menu",
        buttonText: "📂 Open Menu",
        sections
      };

      await conn.sendMessage(from, listMessage, { quoted: mek });

    } catch (e) {
      console.log(e);
      await conn.sendMessage(from, { text: `❌ Error: ${e}` });
    }
  }
);