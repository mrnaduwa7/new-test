const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");

cmd({
  pattern: "stablediffussion",
  alias: ["sd", "imagine2"],
  react: "🎉",
  desc: "Generate an image using AI API.",
  category: "other",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q) {
      return reply("Please provide a prompt for the image.");
    }

    await reply("Generating Imagine...");

    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=${q}`);
    const imageUrl = response.result;

    await conn.sendMessage(m.chat, {
      image: {
        url: imageUrl
      }
    });

  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});


cmd({
  pattern: "fluxai",
  alias: ["flux", "imagine"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q) {
      return reply("Please provide a prompt for the image.");
    }

    await reply("> *MR.NADUWA-V1 CREATING IMAGINE ...🔥*");
    
    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=${q}`);
    const imageUrl = response.result;

    await conn.sendMessage(m.chat, {
      image: {
        url: imageUrl
      }
    });

  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});