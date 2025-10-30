/*CMD
  command: /topreferrals
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: list
  group: 
CMD*/

// It is just List
// you can order, paginate it!
// https://help.bots.business/bjs/lists#getting-data 
let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
// olso it is possible get newest members:
list.order_ascending = false;

var items = list.get();
//Bot.inspect(items);

var msg = '*Top list: *';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n\n" +
    String( parseInt(ind) + 1 ) + ". " + 
    Libs.commonLib.getLinkFor(prop.user) + " : " +
    String(prop.value) + " Referral"
}

Bot.sendMessage(msg);
