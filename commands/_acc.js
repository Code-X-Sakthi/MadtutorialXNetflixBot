/*CMD
  command: /acc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Command: /addBulkCredentials
// Usage: /addBulkCredentials email1:password1;email2:password2;email3:password3

// Extracting the bulk input from the command
var bulkInput = message.split(" ")[1];

// Validation: Check if bulk input is provided
if (!bulkInput) {
    Bot.sendMessage("Please provide the email and password pairs in the correct format.\nUsage: /addBulkCredentials email1:password1;email2:password2");
    return;
}

// Split the bulk input into individual email-password pairs
var pairs = bulkInput.split(";");

// Retrieve or create a resource where credentials are stored
var res = Bot.setProperty("credentials");

// Loop through each pair, split it into email and password, and add it to the resource
for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split(":");
    var email = pair[0];
    var password = pair[1];

    // Ensure both email and password are present in each pair
 
}


// Confirm that the credentials were added
Bot.sendMessage("Crunchyroll accounts added successfully.");
