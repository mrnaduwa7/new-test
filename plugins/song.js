
function hi() {
  console.log('Hello World!')
}
hi()
function hi() {
  console.log('Hello World!')
}
hi()
function hi() {
  console.log('Hello World!')
}
hi()
const more = String.fromCharCode(8206),
  readMore = more.repeat(4001),
  { cmd, commands } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  axios = require('axios')
async function ytmp4(_0x32fd98, _0x293da0) {
  try {
    if (!_0x32fd98 || !_0x293da0) {
      throw new Error('url and format parameters are required.')
    }
    const _0x51c6e8 = parseInt(_0x293da0.replace('p', ''), 10),
      _0x280a30 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0x51c6e8,
        url: _0x32fd98,
      },
      _0x1854a9 = {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        Origin: 'https://loader.to',
        Referer: 'https://loader.to',
        'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
        'Sec-Ch-Ua-Mobile': '?1',
        'Sec-Ch-Ua-Platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
      },
      _0x288740 = await axios.get(
        'https://ab.cococococ.com/ajax/download.php',
        {
          params: _0x280a30,
          headers: _0x1854a9,
        }
      ),
      _0x3c4b66 = _0x288740.data.id,
      _0x42bc99 = async () => {
        const _0x5a4a32 = { id: _0x3c4b66 }
        try {
          const _0x58a49d = await axios.get(
              'https://p.oceansaver.in/ajax/progress.php',
              {
                params: _0x5a4a32,
                headers: _0x1854a9,
              }
            ),
            {
              progress: _0x43174d,
              download_url: _0x8b2e90,
              text: _0x5333a2,
            } = _0x58a49d.data
          return _0x5333a2 === 'Finished'
            ? _0x8b2e90
            : (await new Promise((_0x2d9717) => setTimeout(_0x2d9717, 1000)),
              _0x42bc99())
        } catch (_0x2bfc7b) {
          throw new Error('Error in progress check: ' + _0x2bfc7b.message)
        }
      }
    return await _0x42bc99()
  } catch (_0x48236c) {
    return console.error('Error:', _0x48236c), { error: _0x48236c.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x158633) {
  const _0x28eb5c = _0x158633.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x28eb5c ? _0x28eb5c[1] : null
}
function convertYouTubeLink(_0x6056cb) {
  const _0x28a9b1 = extractYouTubeId(_0x6056cb)
  if (_0x28a9b1) {
    return 'https://www.youtube.com/watch?v=' + _0x28a9b1
  }
  return _0x6056cb
}




cmd({
  pattern: "song",
  react: '🎶',
  desc: "Download audio from YouTube by searching for keywords (using API 2).",
  category: "music",
  use: ".play1 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("*🎧 Searching for the song...*");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the audio
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the audio file
    await conn.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

    reply(`✅ *${title}* has been downloaded successfully!`);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// Video Download Plugin
cmd({
  pattern: "video",
  react: '🎥',
  desc: "Download video from YouTube by searching for keywords (using API 2).",
  category: "video",
  use: ".play2 <video name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a video name or keywords to search for.*");
    }

    reply("*🎬 Searching for the video...*");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the video
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${videoUrl}`; // Update endpoint for video
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch video for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the video file
    await conn.sendMessage(from, {
      video: { url: download_url },
      mimetype: 'video/mp4',
      caption: `✅ *${title}* has been downloaded successfully!`
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});