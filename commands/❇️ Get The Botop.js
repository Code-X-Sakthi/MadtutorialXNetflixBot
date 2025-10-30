/*CMD
  command: ❇️ Get The Botop
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📧 Send Your bots.business Email For Get The Bot*
  keyboard: 
  aliases: getnow
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "Bot Send Successfully : " +
    message +
    "\n\n⚠️ Note :\nPlease Join Our Channel For More Free Bots : @mybots009\n\nSee you transection: @mybots009"
)

Api.sendMessage({
  chat_id: "@malluarmyy",
  text:
    "*🤖 New  Claimed Bot\n\n👤 User:* " +
    user.first_name +
    "\n\n*🛒Claimed: @" +
    bot.name +
    "\n\n🤩 Your Pro Bots And Codes Giveaway here ⬇️: @malluarmyy*",
  parse_mode: "Markdown"})
