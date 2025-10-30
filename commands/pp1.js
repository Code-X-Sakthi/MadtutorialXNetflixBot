/*CMD
  command: pp1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var message_id = request.message.message_id
  var chat_id = "@MadTutXLogs"
  Api.editMessageText({
    message_id: message_id,
    text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Crunchyroll Account\n\n*💵 Amount:* 3 *Points*\n\n*🫧 Status:* Order Cancelled ❌ \n\n~Contact @madtutssupportbot",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
