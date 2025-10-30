/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Enter Your Password
  keyboard: 
  aliases: 
  group: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

msg = "Access denied!! /login"

if(message=="madtut"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);
