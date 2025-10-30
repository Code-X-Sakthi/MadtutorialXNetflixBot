/*CMD
  command: sus1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: id
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
  var msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("sus2")
} else {
  Bot.sendMessage("*You're not the admin*")
}
