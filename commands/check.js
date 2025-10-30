/*CMD
  command: check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("j2")
  User.addToGroup("user")
}

if (user == "left") {
  Api.sendMessage({ 

text:

"<b>🎉🔰 Welcome In Our Premium Account Giveaway Bot\n----------------------------------------------🎉\n\nJoin Our Giveaway Channel to use Our Bot\n» <a href='https://t.me/mad_tutor'>Mad Tutorial</a>\n» <a href='https://t.me/madtutorialstore'>Mad Tutorial Store</a>\n» <a href='https://t.me/Mad_ttuts'>Free Premium Accounts</a>\n» <a href='https://t.me/MadTutXLogs'>Mad Tutorial Logs</a>\n----------------------------------------------\n<i>After completing all tasks Click on ✅ Check!</i></b>",

parse_mode: "html",

disable_web_page_preview: true,

reply_markup: {

inline_keyboard: [[{ text: "✅ Check!", callback_data: "/start" }]]

}

})

}
