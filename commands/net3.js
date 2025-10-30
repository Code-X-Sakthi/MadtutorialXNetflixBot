/*CMD
  command: net3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function getRefCount(userId) {

  var userId = user.id

  var refsCount = User.getProperty({
    name: "REFLIB_" + "refsCount",
    user_id: userId
  })
}
if (getRefCount() < 2) {
Bot.sendMessage("Sorry") 
return
}

var balance = Libs.ResourcesLib.userRes("balance")
try{
var a = Bot.getProperty("Nf") == undefined ? 0:Bot.getProperty("Nf")
    var b = a + 1
    var N = "Acc" + b
var C = Bot.getProperty(N) 
Bot.sendMessage("*🛒 Order Successfully Completed..\n📧 Account Details:-\n📧 Email :- *`"+C.Email+"`*\n🔐 Password :- *`"+ C.Pass+ " `*\n🎊Thanks For Using Our Bot🎊\n~Send Screenshot To @madtutssupportbot\n\nCheck status here: @MadTutXLogs* ")
balance.add(-4)
Bot.setProperty("Nf", b, "integer")
Api.sendMessage({
  chat_id: "@MadTutXLogs",
  text:
    "*🆕 New Account Purchased ❤‍🔥*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Netflix Account\n\n*💵 Amount:* 4 *Points*\n\n*🫧 Status:* Account Paid ✅\n\n❌ If login error occurred then message us at @madtutssupportbot we will refund your points.",
  parse_mode: "Markdown"})

}catch(err){
Bot.sendMessage(
    "*🛒Sorry , This Product is out of stock .*\n_🪄 We will Inform You when it cames back._")
}
