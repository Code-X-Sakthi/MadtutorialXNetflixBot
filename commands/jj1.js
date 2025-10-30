/*CMD
  command: jj1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  if (request.data) {
    if (user.telegramid != params) {
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "🚫 This Button is Not for You",
        show_alert: true
      })
      return
    }
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  var channels = ["@fsubtest1","@fsubtest2"] //replace your channel username
  HTTP.post({
    url: "https://projectoid.site/api/Telegram/MC/index.php",
    body: {
      token: bot.token,
      user_Id: user.telegramid,
      chat_id: channels
    },
    success: "/menu"
  })
} else {
  var res = JSON.parse(content)
  if (res.success != true) {
    var button = [
      [
        { title: "Join Channel", url: "https://t.me/fsubtest1" },
        { title: "Joined", command: "* " + user.telegramid }
      ]
    ]
    Bot.sendInlineKeyboard(
      button,
      "[@" +
        user.username +
        "] *First Join Channnel\n\nBot Coded By @abhishek71599\nGet it from @BjsCodesBot*"
    )

    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
    Api.restrictChatMember({
      chat_id: chat.chatid,
      user_id: user.telegramid
    })

    return
  }
  Api.restrictChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    can_send_messages: true
  })
}

if (!content) {
  if (request.data) {
    if (user.telegramid != params) {
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "🚫 This Button is Not for You",
        show_alert: true
      })
      return
    }
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  var channels = ["@fsubtest2"] //replace your channel username
  HTTP.post({
    url: "https://projectoid.site/api/Telegram/MC/index.php",
    body: {
      token: bot.token,
      user_Id: user.telegramid,
      chat_id: channels
    },
    success: "*"
  })
} else {
  var res = JSON.parse(content)
  if (res.success != true) {
    var button = [
      [
        { title: "Join Channel", url: "https://t.me/fsubtest2" },
        { title: "Joined", command: "* " + user.telegramid }
      ]
    ]
    Bot.sendInlineKeyboard(
      button,
      "[@" +
        user.username +
        "] *First Join Channnel\n\nBot Coded By @abhishek71599\nGet it from @BjsCodesBot*"
    )

    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
    Api.restrictChatMember({
      chat_id: chat.chatid,
      user_id: user.telegramid
    })

    return
  }
  Api.restrictChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    can_send_messages: true
  })
}
