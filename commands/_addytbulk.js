/*CMD
  command: /addytbulk
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (
  user.telegramid == 5517793030 ||
  user.telegramid == 549547874 ||
  user.telegramid == 1729601562
) {
  var bulkInput = params || (message && message.split(" ").slice(1).join(" "));
  if (!bulkInput) {
    Bot.sendMessage("Usage:\n\n/addytbulk link1;link2;link3\n\nor newline separated list");
    return;
  }

  bulkInput = bulkInput.replace(/\n/g, ";");
  var n = Bot.getProperty("ytnum");
  function num() {
    if (n === undefined || n === null) return 1;
    return n;
  }

  var nextIndex = num();
  var pairs = bulkInput.split(";");
  var added = 0;

  for (var i = 0; i < pairs.length; i++) {
    var link = pairs[i].trim();
    if (!link) continue;
    Bot.setProperty({ name: "YT" + nextIndex, value: { Link: link } });
    nextIndex++;
    added++;
  }

  Bot.setProperty("ytnum", nextIndex, "integer");
  Bot.sendMessage("*✅ Added " + added + " YouTube Premium invites successfully!*");
} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}
