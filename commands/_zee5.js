/*CMD
  command: /zee5
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
if(balance.value() < 8){
Bot.sendMessage("*❌ You have to own at least 8 Points to purchase.*")
return
}else{
balance.add(-8)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n💳 Transaction Details =* ```PRI"+user.telegramid+"ME```\n\n*💰Amount =*` 8 Points`\n*💼 Username =* "+user.first_name+"\n\n*⏰Payment Process can take 24 Hours We Will Check And Give You account🎧.*\n\n*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: admin, text: "*🆕 New Purchased PRIME*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Prime Account\n\n*💵 Amount:* 8 *Points *",
parse_mode: "markdown"
})
var but = [
  [
    { text: "🔥 Get Yours", url: "t.me/nfpremiumsbot"}]]
    
Api.sendMessage({
  chat_id: "@testinglogsXNet",
  text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Prime Video Account\n\n*💵 Amount:* 8 *Points*\n\n*🫧 Status:* pending",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but }
  })
