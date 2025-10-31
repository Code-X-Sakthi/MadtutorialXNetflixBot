/*CMD
  command: /start
  help: Start the Bot
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


let referrer = params;
if (referrer && referrer != user.telegramid) {
  let alreadyRef = User.getProperty("referrer_id");
  if (!alreadyRef) {
    User.setProperty("referrer_id", parseInt(referrer), "integer");
  }
}



// Notify admin for new user
var user_link = "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")";
Bot.sendMessageToChatWithId(
  5517793030,
  "*👨🏻‍✈️ New User Joined!*\n\n👤 " + user_link +
  "\n🆔 ID: " + user.telegramid
);

// Now go to Force Sub
Bot.runCommand("/Joined");
