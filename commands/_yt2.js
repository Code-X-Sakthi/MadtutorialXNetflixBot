/*CMD
  command: /yt2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔐 Enter Mail On Which You Want YouTube Premium*
  keyboard: 
  aliases: 
  group: 
CMD*/

function validateEmail(email) {

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());

}

if(validateEmail(message)){
User.setProperty("mail",message,"string")
Bot.runCommand("/yt3")
}else{

Bot.sendMessage("❌ Wrong Email.\n\n*Your Email Not validate*");
Bot.runCommand("GYT")

}
