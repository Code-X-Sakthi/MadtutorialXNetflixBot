/*CMD
  command: ch2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var userStatus = options.result.status;
User.setProperty("status", userStatus, "string");

if (userStatus == "member" || userStatus == "administrator" || userStatus == "creator") {
  User.addToGroup("user");

  // Reward referrer only once after join
  let referrer_id = User.getProperty("referrer_id");
  let alreadyRewarded = User.getProperty("ref_rewarded");

  if (referrer_id && !alreadyRewarded) {
    let refBal = Libs.ResourcesLib.anotherUserRes("balance", referrer_id);
    refBal.add(1);

    // Increase referral count safely
    let refCount = User.getProperty("ref_count_" + referrer_id);
    if (!refCount) refCount = 0;
    User.setProperty("ref_count_" + referrer_id, refCount + 1, "integer");

    // Notify referrer
    Bot.sendMessageToChatWithId(
      referrer_id,
      "🎉 Your referral *" + user.first_name + "* joined successfully!\nYou earned +1 point ❤️"
    );

    // Mark as rewarded
    User.setProperty("ref_rewarded", true, "boolean");
  }

  // Show main menu
  Bot.sendKeyboard(
    "💰 Balance,👫Referral\n💲Withdraw",
    "*🏠 Main Menu*"
  );

} else {
  Api.sendMessage({
text: "*🔰 Please join all required channels to continue!*\n\n" +
        "» [Mad Tutorial](https://t.me/mad_tutor)\n" +
        "» [Mad Tutorial Store](https://t.me/madtutorialstore)\n" +
        "» [Mad Tutorial Logs](https://t.me/MadTutXLogs)\n",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "✅ Joined", callback_data: "/start" }]]
  }
});
}
