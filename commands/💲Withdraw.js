/*CMD
  command: 💲Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /buyaccounts
  group: 
CMD*/

var buttons = [
  [{ title: "NETFLIX", command: "net" }],
  [{ title: "YOUTUBE", command: "🎬 YouTube" }]
];

Bot.sendInlineKeyboard(
  buttons,
  "<b>📨 You Can Exchange Your Point to Premium Accounts.\n\n" +
  "🔄 Exchange Point to ~\n----------------------------------------------\n" +
  "👉 NETFLIX [ 4 Point ]\n\n" +
  "🔄 Exchange Point to ~\n----------------------------------------------\n" +
  "👉 YOUTUBE INVITE LINK [ 10 Point ]\n\n" +
  "----------------------------------------------\n\n" +
  "<i>📌 Select a service below 👇</i></b>"
);
