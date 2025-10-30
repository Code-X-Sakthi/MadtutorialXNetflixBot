/*CMD
  command: pornh7b
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ph
  group: 
CMD*/

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "nost" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/cd7ede73b10f2fbec3d5a.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy porn hub premium account?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
