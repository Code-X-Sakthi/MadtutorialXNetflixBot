/*CMD
  command: check_ch1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// check_ch1 command — force sub verification

if ((options.result.status == "member") || 
    (options.result.status == "administrator") || 
    (options.result.status == "creator")) {
  
  // ✅ user joined channel successfully
  Bot.runCommand("ch2");
  
} else {
  // ❌ not joined yet — show retry button
  Api.sendMessage({
    text: "❌ You haven’t joined all channels yet!\nPlease join and then press ✅ Joined.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "✅ Joined", callback_data: "check_ch1" }]]
    }
  });
}
