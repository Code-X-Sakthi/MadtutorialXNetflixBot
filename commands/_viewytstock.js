/*CMD
  command: /viewytstock
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /viewyt
  group: 
CMD*/

if (user.telegramid == 5517793030 || user.telegramid == 549547874 || user.telegramid == 1729601562) {
  var total = Bot.getProperty("ytnum");
  if (!total || total == 1) {
    Bot.sendMessage("⚠️ No YouTube invites found in stock.");
    return;
  }

  var msg = "📦 *Available YouTube Invites (" + (total - 1) + ")*\n\n";
  var chunk = "";
  for (var i = 1; i < total; i++) {
    var acc = Bot.getProperty("YT" + i);
    if (!acc) continue;
    chunk += i + ". 🔗 " + acc.Link + "\n\n";
    if (chunk.length > 3500) {
      Bot.sendMessage(chunk);
      chunk = "";
    }
  }

  if (chunk.length > 0) Bot.sendMessage(chunk);
  Bot.sendMessage("✅ *All YouTube invites listed above.*");
} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}
