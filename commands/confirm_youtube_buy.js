/*CMD
  command: confirm_youtube_buy
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

// Check if user has 10 points
if (balance.value() < 10) {
  Bot.sendMessage("❌ You don't have enough points. You need 10 points to buy YouTube Premium.");
  return;
}

// Get total YT invites
var total = Bot.getProperty("ytnum");
if (!total || total == 1) {
  Bot.sendMessage("⚠️ No YouTube Premium invites available right now. Try again later.");
  return;
}

// Loop through YT invites to find one
for (var i = 1; i < total; i++) {
  var yt = Bot.getProperty("YT" + i);
  if (yt && yt.Link) {

    // Send invite to user
    Bot.sendMessage(
      "🎬 *Order Successfully Completed!*\n\n" +
      "🔗 *Your YouTube Premium Invite:*\n" +
      yt.Link +
      "\n\n🎉 Thanks for using our bot!",
      { parse_mode: "Markdown" }
    );

    // Deduct 10 points
    balance.add(-10);

    // Remove used invite
    Bot.setProperty("YT" + i, null);

    return;
  }
}

// If no invite found
Bot.sendMessage("❌ All YouTube Premium invites have been used up. Try again later!");

