/*CMD
  command: prime
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ama
  group: 
CMD*/

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "nost" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/0b91193c24c8a9a63bdc8.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy prime video premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
