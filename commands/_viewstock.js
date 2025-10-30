/*CMD
  command: /viewstock
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

if (
  user.telegramid == 5517793030 ||
  user.telegramid == 549547874 ||
  user.telegramid == 1729601562
) {

  var total = Bot.getProperty("num");
  if (!total || total == 1) {
    Bot.sendMessage("⚠️ No accounts found in stock.");
    return;
  }

  var msg = "📦 *Available Netflix Accounts (" + (total - 1) + ")*\n\n";
  var chunk = "";

  for (var i = 1; i < total; i++) {
    var acc = Bot.getProperty("Acc" + i);
    if (!acc) continue;

    chunk += i + ". 📧 *" + acc.Email + "*\n🔐 " + acc.Pass + "\n\n";

    // If message gets long, send partial and clear
    if (chunk.length > 3500) {
      Bot.sendMessage(chunk);
      chunk = "";
    }
  }

  if (chunk.length > 0) {
    Bot.sendMessage(chunk);
  }

  Bot.sendMessage("✅ *All stock accounts listed above.*");

} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}

