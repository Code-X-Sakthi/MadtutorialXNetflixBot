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
  Bot.sendInlineKeyboard(
    [[{ title: "🔙 Back", command: "back" }]],
    "🚫 You need *10 points* to buy YouTube Premium.\n👬 Refer more to earn points."
  );
  return;
}

let info = "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")";
let joinbuttons = [[{ text: "✅ Buy Now", callback_data: "confirm_youtube_buy" }]];

Api.sendPhoto({
  photo: "https://telegra.ph/file/ea6e39cb62a6aca8c8642.jpg",
  caption:
    "🙋‍♂ Hello " + info + "\n\n" +
    "🎬 *Do you want to buy YouTube Premium?*\n\n" +
    "💰 *Cost:* 10 Points",
  reply_markup: { inline_keyboard: joinbuttons },
  parse_mode: "Markdown"
});

