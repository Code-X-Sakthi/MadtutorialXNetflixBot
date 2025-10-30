/*CMD
  command: /addyt
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
  if (params) {
    var n = Bot.getProperty("ytnum");
    function num() {
      if (n == undefined) {
        return 1;
      } else {
        return n;
      }
    }

    var ytLink = params.trim();
    Bot.setProperty({
      name: "YT" + num(),
      value: { Link: ytLink }
    });
    Bot.setProperty("ytnum", num() + 1, "integer");
    Bot.sendMessage(num() + " YouTube Invite added successfully ✅\n\n🔗 Link: " + ytLink);
    return;
  }
  Bot.sendMessage("Run command in this format:\n\n/addyt <invite_link>");
} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}

