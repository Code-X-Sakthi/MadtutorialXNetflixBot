/*CMD
  command: yt_collect_email
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: "👉 Just type your email below:"

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let email = message;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  Bot.sendMessage("❌ That doesn't look like a valid email.\n\n📧 Please type your email again:");
  Bot.runCommand("yt_collect_email");
  return;
}

// Send confirmation to user
Bot.sendMessage(
  "✅ Purchase Successful!\n\n📩 Your activation process is pending.\nYou'll be notified once it's completed. Thank you!"
);

// Log message to channel
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

