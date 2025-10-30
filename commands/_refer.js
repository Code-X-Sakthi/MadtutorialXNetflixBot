/*CMD
  command: /refer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👫referral
  group: 
CMD*/

let reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid;

let refCount = User.getProperty("ref_count");
if (!refCount) refCount = 0;

Bot.sendMessage(
  "💰 <b>Invite friends and earn 1 point per user!</b>\n\n" +
  "🔗 <b>Your referral link:</b>\n<a href='" + reflink + "'>" + reflink + "</a>\n\n",
  { parse_mode: "HTML" }
);
