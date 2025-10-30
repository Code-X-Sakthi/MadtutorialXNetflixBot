/*CMD
  command: udemy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "udemy1" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/a6fa73ea4bf11dfb17e21.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy Udemy premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
