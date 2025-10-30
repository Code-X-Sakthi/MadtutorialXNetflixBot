/*CMD
  command: /disney
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


}
Bot.runCommand("di2")
