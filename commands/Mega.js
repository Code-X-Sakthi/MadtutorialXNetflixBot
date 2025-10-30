/*CMD
  command: Mega
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: mega
  group: 
CMD*/

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "/wondershare" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/9b8c419625decc8baaeb1.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy Mega.nz ( 50gb ) premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
