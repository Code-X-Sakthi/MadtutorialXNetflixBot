/*CMD
  command: 🎁 Bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage(" *🙁 Sorry you already claimed your bonus today.Please claim again after ⏱ " +
        wait_hours +
        " Hours " +
        wait_minutes +
        " Minutes " +
        seconds +
        " Seconds\n\n*_ You can claim your bonus every 24 hours. _"
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")

let bonus = 0.5

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(+bonus)
Bot.sendKeyboard("🏡 Home",
  "✨ Congrats! You've claimed your daily bonus " + bonus + " Points"
)
