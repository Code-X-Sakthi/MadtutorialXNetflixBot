/*CMD
  command: GYT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var but = [
  [
    { text: "Confirm", callback_data: "nost" },    { text: "Cancel", callback_data: "/menu" }]]
var balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < 13) {
  
  Bot.sendMessage(
    "🚫 You Need 13 Points For Exchanging .\n👬 Refer More to Earn .")
  return
}
Api.sendMessage({
  text:
    "*🎁 Take 1 Month Youtube Premium On Mail At 13 Points ..\n\n👉For Exchange Click On Confirm*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard:  but
  },
  disable_web_page_preview: true
})
