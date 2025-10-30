/*CMD
  command: j3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let channel = "@fsubtest3";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"ch3"})
