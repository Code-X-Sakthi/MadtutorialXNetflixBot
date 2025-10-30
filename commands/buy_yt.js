/*CMD
  command: buy_yt
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance");
if (balance.value() < 10) {
  Bot.sendMessage("❌ You need *10 points* to withdraw a YouTube Premium invite.");
  return;
}

// correct array structure for inline keyboard
var confirmKeyboard = [
  [{ title: "✅ Confirm Purchase", command: "confirm_youtube_buy" }],
  [{ title: "❌ Cancel", command: "cancel_withdraw" }]
];

Bot.sendInlineKeyboard(
  confirmKeyboard,
  "📺 *YouTube Premium*\n\n💰 Cost: 10 Points\n\nAre you sure you want to buy this invite?"
);
