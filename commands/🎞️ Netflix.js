/*CMD
  command: 🎞️ Netflix
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: net
  group: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [[{ title: "Back", command: "back"}]]
if (balance.value() < 4) {
  Bot.sendInlineKeyboard(
    button,
    "🚫 You Need 4 Points For Exchanging .\n👬 Refer More to Earn ."
  )
  return
}
let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "j3" }]]
Api.sendPhoto({
  photo: "https://telegra.ph/file/ea6e39cb62a6aca8c8642.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy Netflix premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
