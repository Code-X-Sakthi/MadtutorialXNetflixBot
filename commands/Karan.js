/*CMD
  command: Karan
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin_chat")
var balance = Libs.ResourcesLib.userRes("balance")
if(balance.value() < 8){
Bot.sendMessage("*❌ You have to own at least 8 Points to purchase Netflix Primium*")
return
}else{
balance.add(-8)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n💳 Transaction Details =* `Generating....`\n\n*💰Amount =*` 8 Points`\n*💼 Username =* "+user.first_name+"\n\n*⏰Payment Process can take more then 24 Hours We Will Check And Give You Netflix account🎧.*\n\n*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: admin, text: "*🆕 New Purchased Netflix Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* NetFlix Account\n\n*💵 Amount:* 8 *Points *",
parse_mode: "Markdown"})
