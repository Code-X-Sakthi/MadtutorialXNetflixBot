/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🛍️ wallet
  group: 
CMD*/

var button = [[{ title: "📝 Set or Change wallet 📝", command: "/setwallet" }]]
var c = Bot.getProperty("cur")
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(
  button,
  "*🕹 Account Settings ⚙️*\n\n*🤴🏻 User = *`" +
    user.first_name +
    "`\n*🆔 User Id = *`" +
    user.telegramid +
    "`\n*💼 Wallet =* `" +
    wallet +
    "`\n\n🚀_If Your Account Wallet Is Undefind Set It By Clicking In Below Button 🔻_"
)
