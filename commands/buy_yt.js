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

let balance = Libs.ResourcesLib.userRes("balance");

if (balance.value() < 10) {
  Bot.sendMessage("❌ You need 10 points to buy YouTube Premium.");
  return;
}

Bot.sendMessage(
  "🎬 *YouTube Premium Purchase*\n\n" +
  "💰 Cost: 10 Points\n\n" +
  "📧 To continue, please send your email using this command:\n\n" +
  "`/mymail your@email.com`\n\n" +
  "Example: `/mymail johndoe@gmail.com`\n\n" +
  "Once sent, your activation request will be processed soon. ❤️",
  { parse_mode: "Markdown" }
);

