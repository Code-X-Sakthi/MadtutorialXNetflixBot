/*CMD
  command: /netflix
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
if(balance.value() < 4){
Bot.sendMessage("*❌ You have to own at least 4 Points to purchase Netflix Primium*")
return
}else{
balance.add(-4)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n💳 Transaction ID =* ```NET"+ user.telegramid +"FLIX```\n\n*💰Amount =*` 4 Points`\n*💼 Name =*"+user.first_name+"\n\n*⏰Payment Process can take 24 Hours We Will Check And Give You Netflix account🎧.*\n\n*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: admin, text: "*🆕 New Purchased Netflix Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* NetFlix Account\n\n*💵 Amount:* 4 *Points *",
parse_mode: "Markdown"})
