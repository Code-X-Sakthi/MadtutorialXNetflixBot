/*CMD
  command: net2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
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
var button = [[{ title: "<Back", command: "/Netflix"}]]
if (balance.value() < 9) {
  Bot.sendInlineKeyboard(
    button,
    "🚫 You Need 9 Points For Exchanging .\n👬 Refer More to Earn ."
  )
  return
}



Bot.sendMessage("*🔁 Order Processing*", {
  on_result: "net3",
  is_reply: false
})
