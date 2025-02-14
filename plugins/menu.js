const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "🇱🇰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
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
        news:''
    };

    for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
            menu[commands[i].category] += `*${commands[i].pattern}*  | Execute Command\n`;
        }
    }

    let madeMenu = `*╭──────────────────💻 Hacker Mode Activated 💻* 

*⇆ Welcome ${pushname}, Accessing Command Database...*

*┕─────────────────────────────────────────────────*

┏━━━━━━━━━━━━━━━━━━━━━━━━━
 *System: Welcome to Mr.Naduwa Bot Command Hub* 
 ┗━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 *Update Log* 🔹
┏━━━━━●●►
│ Updated by Mr. Naduwa 👨🏻‍💻
┗━━━━━●●►

🔹 *Commands Section* 🔹
┏━━━━━●●►
│ *Download Commands* [Execute Download Functions]
┏━━━━━●●►
${menu.download}

┏━━━━━●●►
│ *Fun Commands* [Execute Fun Functions]
┏━━━━━●●►
${menu.fun}

┏━━━━━●●►
│ *Main Commands* [Core Bot Functions]
┏━━━━━●●►
${menu.main}

┏━━━━━●●►
│ *Group Management* [Admin Commands]
┏━━━━━●●►
${menu.group}

┏━━━━━●●►
│ *Owner Commands* [Owner Access Only]
┏━━━━━●●►
${menu.owner}

┏━━━━━●●►
│ *Convert Functions* [Conversion Tools]
┏━━━━━●●►
${menu.convert}

┏━━━━━●●►
│ *Search Functions* [Search the Web]
┏━━━━━●●►
${menu.search}

┏━━━━━●●►
│ *Other Utilities* [Miscellaneous Commands]
┏━━━━━●●►
${menu.other}

┏━━━━━●●►
│ *News Section* [Latest Updates]
┏━━━━━●●►
${menu.news}

*╰──────────────────❒*

▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭

> *Powered by Mr. Naduwa - Terminal V1.0*
`

await conn.sendMessage(from, { 
    image: {url: config.ALIVE_IMG}, 
    caption: madeMenu, 
    buttons: [
        {buttonId: 'download', buttonText: {displayText: 'Download Commands'}, type: 1},
        {buttonId: 'fun', buttonText: {displayText: 'Fun Commands'}, type: 1},
        {buttonId: 'main', buttonText: {displayText: 'Main Commands'}, type: 1},
        {buttonId: 'group', buttonText: {displayText: 'Group Commands'}, type: 1},
        {buttonId: 'owner', buttonText: {displayText: 'Owner Commands'}, type: 1},
    ]
},{quoted: mek});
}catch(e){
    console.log(e);
    reply(`${e}`);
}
})