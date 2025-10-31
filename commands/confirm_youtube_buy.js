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

let balance = Libs.ResourcesLib.userRes("balance");

if (balance.value() < 10) {
  Bot.sendMessage("❌ You don't have enough points. You need 10 points to buy YouTube Premium.");
  return;
}

// No point deduction yet — just show instructions
Bot.sendMessage(
  "📺 *YouTube Premium Purchase*\n\n" +
  "💰 Cost: 10 Points\n\n" +
  "To continue, please send your email using this command:\n" +
  "`/mymail your@email.com`\n\n" +
  "Example: `/mymail johndoe@gmail.com`\n\n" +
  "After you send your email, 10 points will be deducted automatically and your activation will be queued.",
  { parse_mode: "Markdown" }
);

