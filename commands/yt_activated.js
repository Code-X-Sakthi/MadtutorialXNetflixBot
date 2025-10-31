/*CMD
  command: yt_activated
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

var data = request.data;
if (!data) return;

var parts = data.split("_");
var user_id = parts[2]; // get telegram id

// Send confirmation to user
Api.sendMessage({
  chat_id: user_id,
  text: "🎉 Your YouTube Premium has been successfully activated!\n\nEnjoy your subscription! ❤️"
});

// Confirm to admin
Bot.sendMessage("✅ Activation confirmed and user notified!");

