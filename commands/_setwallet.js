/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var text = "✏️ Send now your *Telegram Username*"
var message_id = request.message.message_id

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown"
})
Bot.runCommand("wall")
