/*CMD
  command: /addbulk
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

/*CMD
  command: /addbulk
  help: Add multiple accounts at once (use ; or new lines)
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
    Bot.sendMessage("Usage:\n\n/addbulk mail1:pass1;mail2:pass2\n\nor\n/addbulk mail1:pass1\\nmail2:pass2");
    return;
  }

  // Replace newlines with semicolons to unify splitting
  bulkInput = bulkInput.replace(/\n/g, ";");

  var n = Bot.getProperty("num");
  function num() {
    if (n === undefined || n === null) return 1;
    return n;
  }
  var nextIndex = num();

  var pairs = bulkInput.split(";");
  var added = 0;

  for (var i = 0; i < pairs.length; i++) {
    var item = pairs[i].trim();
    if (!item) continue;

    var parts = item.split(":");
    var k1 = parts[0];
    var k2 = parts[1];

    if (!k1 || !k2) continue; // skip if invalid

    Bot.setProperty({
      name: "Acc" + nextIndex,
      value: { Email: k1, Pass: k2 }
    });

    nextIndex++;
    added++;
  }

  Bot.setProperty("num", nextIndex, "integer");

  Bot.sendMessage(
    "*✅ Successfully added " + added + " accounts to stock.*"
  );

} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}

