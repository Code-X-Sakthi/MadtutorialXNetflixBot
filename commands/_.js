/*CMD
  command: *
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

if (message.startsWith("/")) {
  return; // don't trigger the welcome message when user sends any command like /mymail
}

Bot.sendMessage(
  "*🎉🔰 Welcome In Our Premium Account Giveaway Bot*\n" +
  "----------------------------------------------🎉\n\n" +
  "*Join Our Giveaway Channel to use Our Bot*\n" +
  "» [Mad Tutorial](https://t.me/mad_tutor)\n" +
  "» [Mad Tutorial Store](https://t.me/madtutorialstore)\n" +
  "» [Free Premium Accounts](https://t.me/Mad_ttuts)\n" +
  "» [Mad Tutorial Logs](https://t.me/MadTutXLogs)\n" +
  "----------------------------------------------",
  { parse_mode: "Markdown" }
);
