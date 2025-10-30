/*CMD
  command: paid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: account
  keyboard: 
  aliases: 
  group: 
CMD*/

if (
  user.telegramid == 5517793030 ||
  user.telegramid == 549547874 ||
  user.telegramid == 1729601562
)
{
let amount = message
let tgid = User.getProperty("id")
Bot.sendMessage("" +amount+ " Sended to "   +tgid+ "");
Bot.sendMessageToChatWithId(tgid,"" + amount + "\n *~ Admin*");
}else{
Bot.sendMessage("*You're not the admin*")
}
