/*CMD
  command: qwerty
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send the amount you want to add*
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
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " DOGE has been added to the User with an Id of :  *"   +tgid+ 
  " *balance*");
Bot.sendMessageToChatWithId(tgid,"*You have just received *" + amount + " *points from the admin*");
}else{
Bot.sendMessage("*You're not the admin*")
}
