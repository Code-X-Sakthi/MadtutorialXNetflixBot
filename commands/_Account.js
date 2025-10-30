/*CMD
  command: /Account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💰 balance
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("*💰 Balance : "  +
    balance.value() +
    " Points\n\n⚜️ Refer And Earn More !!!*"
)

if (user == "left") {
  Bot.runCommand("/start")
}
