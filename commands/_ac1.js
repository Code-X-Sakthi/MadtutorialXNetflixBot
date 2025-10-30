/*CMD
  command: /ac1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (
  user.telegramid == 5517793030 ||
  user.telegramid == 549547874 ||
  user.telegramid == 1729601562
)
 {
if(params){
var cru = Bot.getProperty("cr")
function cr(){
if(cru == undefined){
return 1;
}else{
return cru;
}}

var lol = params.split(":")
var cr1 = lol[0]
var cr2 = lol[1]

  Bot.setProperty({
    name: "Acc1"+cr(),
    value: { Email: cr1, Pass: cr2 }
  })
Bot.setProperty("cr",cr()+1,"integer")
Bot.sendMessage(
  cr()+" *Account added SUCCESSFULY ADDED✅\n\nYOUR cc ACCOUNT 👇\n\nEMAIL : " +
    cr1 +
    " \nPASS : " +
    cr2 +
    "\n\nDEVELOP BY - @NovaxTG*"
)
return}
Bot.sendMessage("Run Command In Format of \n\n `/add mail:password `")
}
