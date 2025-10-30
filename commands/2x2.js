/*CMD
  command: 2x2
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
if(balance.value() > 18){
Bot.sendMessage("*❌ You need exact 18 points in your account to double it*")
return
}else{
balance.add(18)

}
Bot.sendMessage("*Done! Check Your Balance..*.")
