/*CMD
  command: /setdetails
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("admin_chat", "5517793030", "string")
Bot.setProperty("num", 0, "integer")
Bot.setProperty("credentials", "x123y45apikey", "string")
Bot.setProperty("admin", "t.me/NovaxTG", "string")

Bot.sendMessage("✅ Details saved successfully.")
