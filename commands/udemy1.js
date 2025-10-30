/*CMD
  command: udemy1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin_chat")
var balance = Libs.ResourcesLib.userRes("balance")
if(balance.value() < 2){
Bot.sendMessage("*❌ You have to own at least 2 Points to purchase*")
return
}else{
balance.add(-2)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n💳 Transaction ID =* ```U"+user.telegramid+"DEMY```\n\n*💰Amount =*` 2 Points`\n*💼 NAME =* "+user.first_name+"\n\n*⏰We Will Check And Give You account within 1-2 Hours🎧.*\n\n*📨You can check your order status here: @testinglogsXNet*\n\n*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: 5517793030, text: "*🆕 New Purchased udemy Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* crunchy Account\n\n*💵 Amount:* 5 *Points *",
parse_mode: "Markdown"})
var message_id = request.message.message_id
var but = [
  [
    { text: "🔥 Get Yours", url: "t.me/nfpremiumsbot"}]]
    
Api.sendMessage({
  chat_id: "@testinglogsXNet",
  text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Udemy Account\n\n*💵 Amount:* 2 *Points*\n\n*🫧 Status:* pending",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but }
  })
