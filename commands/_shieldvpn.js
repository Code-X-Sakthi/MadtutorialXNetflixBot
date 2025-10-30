/*CMD
  command: /shieldvpn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: vpn2
  group: 
CMD*/

var admin = Bot.getProperty("admin_chat")
var balance = Libs.ResourcesLib.userRes("balance")
if(balance.value() < 5){
Bot.sendMessage("*❌ You have to own at least 5 Points to purchase.*")
return
}else{
balance.add(-5)

}
Bot.sendMessage("*✅ Withdrawal Requested Successfully*\n\n*💳 Transaction Details =* ```EX"+user.telegramid+"VPN```\n\n*💰Amount =*` 5 Points`\n*💼 Username =* "+user.first_name+"\n\n*⏰Payment Process can take 24 Hours We Will Check And Give You account🎧.*\n\nCheck Order Status: @testinglogsXNet*✅ Important:*\n_If You Do Fake Refer You Will Banned_")

Api.sendMessage({chat_id: 5517793030, text: "*🆕 New Purchased vpn Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* vpn Account\n\n*💵 Amount:* 5 *Points *",
parse_mode: "Markdown"})

var but = [
  [
    { text: "🔥 Get Yours", url: "t.me/nfpremiumsbot"}]]
    
Api.sendMessage({
  chat_id: "@testinglogsXNet",
  text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Express vpn Account\n\n*💵 Amount:* 5 *Points *\n\n*🫧 Status:* pending",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but }
  })
