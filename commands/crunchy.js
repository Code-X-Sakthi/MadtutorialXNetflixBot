/*CMD
  command: crunchy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: crun
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
if(balance.value() < 2){
Bot.sendMessage("*❌ You have to own at least 2 Points to purchase*")
return
}else{

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var joinbuttons = [
  [{ text: "✅ Buy Now", callback_data: "/disney" }]]
Api.sendPhoto({
  photo: "https://graph.org/file/63ea82f31e91891e28977.jpg",
  caption:
    "*🙋‍♂ Hello* "+info+" *Do you want to buy Crunchyroll premium?*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown"
})
}
