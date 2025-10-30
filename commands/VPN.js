/*CMD
  command: VPN
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: vpn
  group: 
CMD*/

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "nost" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/cb6ec86a3cc49759a12cf.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy Express VPN premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
