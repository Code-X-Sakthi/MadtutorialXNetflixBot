/*CMD
  command: /yt3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var balance = Libs.ResourcesLib.userRes("balance")
var mail = User.getProperty("mail")
var name= "*"+bot.name+"*"
Api.sendMessage({
  chat_id: "@testinglogsXNet",
  text: "*🆕 New Account Confirmation*\n\n🤩 Purchased: YouTube Premium ( On Mail )\n\n📧 Mail: `"+mail+"`\n\nWe will Send You Premium Invite Soon . Stay Tuned",
  parse_mode: "Markdown",
  reply_markup: {inline_keyboard: [[{text: "♻️ Get Your Premium", url: "https://t.me/"+bot.name}]]}
})
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n🛒  YouTube ON EMAIL [ 13 Point ].\n\n📧 Email :- "+mail+"\n\n⏰ An invitation will sent to your email in Few Hours then accept it and send screenshot to @Madtutsbot*")
balance.add(-13)
Api.sendMessage({chat_id: 5517793030, text: "*🆕 New Purchased YT premium Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Email:* `"+mail+"`\n\n*🛒Bought:* YT Account\n\n*💵 Amount:* 13 *Points *",
parse_mode: "Markdown"})
