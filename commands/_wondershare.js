/*CMD
  command: /wondershare
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
if(balance.value() < 7){
Bot.sendMessage("*❌ You have to own at least 7 Points to purchase.*")
return
}else{
balance.add(-7)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n💳 Transaction Details =* ```MEGA"+user.telegramid+"NZ```\n\n*💰Amount =*` 7 Points`\n*💼 Username =* "+user.first_name+"\n\n*⏰Payment Process can take 24 Hours We Will Check And Give You  account🎧.*\n\n*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: admin, text: "*🆕 New Purchased mega Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* mega Account\n\n*💵 Amount:* 7 *Points *",
parse_mode: "Markdown"})
var but = [
  [
    { text: "🔥 Get Yours", url: "t.me/nfpremiumsbot"}]]
    
Api.sendMessage({
  chat_id: "@MadTutXLogs",
  text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Mega.nz Account\n\n*💵 Amount:* 7 *Points*\n\n*🫧 Status:* pending",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but }
  })
