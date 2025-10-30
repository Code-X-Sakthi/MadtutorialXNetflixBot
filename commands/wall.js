/*CMD
  command: wall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("wallet", message, "string")
  Bot.sendKeyboard(
  "🏡 Home", "*✅ Done Your Wallet Set To * `"+message+"`")
