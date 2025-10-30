/*CMD
  command: less2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: amount?
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
Bot.sendMessage("*The amount " +amount+ " kaat liya :  *"   +tgid+ 
  " *balance*");
Bot.sendMessageToChatWithId(tgid,"*!!!Fake Refferal Detected!!!*\n\n" + amount + " *points deducted from your account.*");
}else{
Bot.sendMessage("*You're not the admin*")
}
