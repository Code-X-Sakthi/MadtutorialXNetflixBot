/*CMD
  command: /onMessage
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

if (User.getProperty("waiting_for_email") == true) {
  let email = message;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    Bot.sendMessage("❌ That doesn't look like a valid email.\n\n📧 Please type your email again:");
    return;
  }

  // Reset flag
  User.setProperty("waiting_for_email", false, "boolean");

  // Confirm to user
  Bot.sendMessage(
    "✅ Purchase Successful!\n\n📩 Your activation process is pending.\nYou'll be notified once it's completed. Thank you!"
  );

  // Send log message to your log channel
  Api.sendMessage({
    chat_id: "@MadTutXLogs",
    text:
      "🆕 *New YouTube Premium Purchased ❤‍🔥*\n\n" +
      "👤 *User:* @" + (user.username || "NoUsername") + "\n" +
      "🆔 *User ID:* `" + user.telegramid + "`\n" +
      "📧 *Email:* `" + email + "`\n" +
      "💵 *Amount:* 10 Points\n" +
      "🫧 *Status:* Pending Activation ⏳",
    parse_mode: "Markdown"
  });
}

