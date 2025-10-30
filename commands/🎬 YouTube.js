/*CMD
  command: 🎬 YouTube
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: yt
  group: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance");
if (balance.value() < 10) {
  Bot.sendInlineKeyboard([[{ title: "Back", command: "back" }]], "🚫 You Need 10 Points For Exchanging .\n👬 Refer More to Earn .");
  return;
}

let info = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")";
var joinbuttons = [[{ text: "✅ Buy Now", callback_data: "buy_yt" }]];

Api.sendPhoto({
  photo: "https://telegra.ph/file/ea6e39cb62a6aca8c8642.jpg",
  caption: "*🙋‍♂ Hello* " + info + " *Do you want to buy YouTube Premium?*",
  reply_markup: { inline_keyboard: joinbuttons },
  parse_mode: "Markdown"
});

