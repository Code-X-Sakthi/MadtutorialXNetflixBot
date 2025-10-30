/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input a message
  keyboard: 
  aliases: 
  group: 
CMD*/

var tgid = options.tgid;

var msg = "Answer from admin: " + "\n" + message + "\n\n Reply again: /message";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
