/*CMD
  command: /mymail
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

let parts = message.split(" ");
let email = parts[1];

if (!email) {
  Bot.sendMessage(
    "📧 Please provide your email address.\n\nExample:\n`/mymail your@email.com`",
    { parse_mode: "Markdown" }
  );
  return;
}

let emailRegex = /^[\\w.-]+@[\\w.-]+\\.[A-Za-z]{2,}$/;
if (!emailRegex.test(email)) {
  Bot.sendMessage(
    "❌ Invalid email format.\nPlease use something like: `/mymail example@gmail.com`",
    { parse_mode: "Markdown" }
  );
  return;
}

let balance = Libs.ResourcesLib.userRes("balance");

if (balance.value() < 10) {
  Bot.sendMessage("❌ You don't have enough points. You need 10 points to buy YouTube Premium.");
  return;
}

// Deduct 10 points
balance.add(-10);

// Save email for reference
User.setProperty("yt_email", email, "string");

// Confirmation to user
Bot.sendMessage(
  "✅ *Purchase Successful!*\n\n" +
  "👤 *Name:* " + (user.first_name || "Unknown") + "\n" +
  "📧 *Email:* `" + email + "`\n\n" +
  "🕓 Your YouTube Premium activation has been queued. You'll be notified once it's processed.",
  { parse_mode: "Markdown" }
);

// Send log to admin channel
Api.sendMessage({
  chat_id: "@MadTutXLogs",
  text:
    "*🆕 New YouTube Premium Purchase ❤‍🔥*\n\n" +
    "👤 *Name:* " + (user.first_name || "Unknown") + "\n" +
    "📛 *Username:* @" + (user.username || "NoUsername") + "\n" +
    "🆔 *Telegram ID:* `" + user.telegramid + "`\n\n" +
    "📧 *Email:* `" + email + "`\n" +
    "💵 *Points Deducted:* 10\n" +
    "🫧 *Status:* Pending Activation ⏳\n\n" +
    "❌ If activation fails, contact @madtutssupportbot.",
  parse_mode: "Markdown"
});
