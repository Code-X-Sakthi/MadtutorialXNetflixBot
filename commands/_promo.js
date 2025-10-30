/*CMD
  command: /promo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Message?
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if(user.telegramid == 5517793030) {
  try {
    var msg = message
    function sendFile(type, method, cap, fileid) {
      HTTP.post({
        url: "https://projectoid.site/api/Telegram/broadcast",
        headers: { "content-type": "application/json" },
        body: {
          method: method, //for forward use forwardMessage
          text: cap,
          bot_token: bot.token,
          admin: user.telegramid,
          type: type,
          bot: bot.name,
          file_id: fileid,
          from_chat_id: request.chat.id,
          message_id: request.message_id,
          caption: cap,
          parseMode: "html", //you can change it to Markdown
          disableWebPreview: true,
          protectContent: true //if you want to allow users your broadcast message change it to false
        },
        folow_redirects: true //dont change
      })
    }
    var boarding = "🖥 <b><u>Broadcast By Admin</u></b> \n\n"
    var caption = !request.caption
      ? boarding
      : boarding + "🖇 <i>Message =</i> " + request.caption

    if (request.photo[0]) {
      sendFile("photo", "sendPhoto", caption, request.photo[0].file_id)
      return
    }
    if (request.text) {
      sendFile(
        "text",
        "sendMessage",
        "🎙 <b><u>Broadcast By Admin</u></b> \n\n<i>Message</i> = " + message,
        null
      )
      return
    }
    if (request.video) {
      sendFile("video", "sendVideo", caption, request.video.file_id)
      return
    }
    if (request.audio) {
      sendFile("audio", "sendAudio", caption, request.audio.file_id)
      return
    }
    if (request.document) {
      sendFile("document", "sendDocument", caption, request.document.file_id)
      return
    }
    if (request.animation) {
      sendFile("animation", "sendAnimation", caption, request.animation.file_id)
      return
    }
    if (request.voice) {
      sendFile("voice", "sendVoice", caption, request.voice.file_id)
      return
    }
    if (request.video_note) {
      sendFile("video_note", "sendVideo", caption, request.video_note.file_id)
      return
    }
  } catch (err) {
    Bot.sendMessage(
      err +
        "\n\n_Solution:_ *message @abhishek71599 with error tab screen shot and wait*"
    )
  }
  return
}
Bot.sendMessage("*You are Not a Admin*")
