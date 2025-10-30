/*CMD
  command: get4
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Example code to retrieve and use a stored property

// Retrieve the stored credentials
var credentials = Bot.getProperty("credentials");

// Check if credentials exist
if (!credentials || credentials.length === 0) {
    Bot.sendMessage("🛒Sorry , This Product is out of stock .\n🪄 We will Inform You when it cames back..");
    return;
}

// Example: Accessing a property within the credentials
// Assuming credentials is an array of objects with an 'email' and 'password' field
if (credentials.length > 0) {
    // Safely accessing the first credential
    var firstCredential = credentials[0];
    if (firstCredential) {
        var email = firstCredential.email;
        var password = firstCredential.password;

        // Check if email and password exist before using them
        if (email && password) {
            Bot.sendMessage("Email: " + email + "\nPassword: " + password);
        } else {
            Bot.sendMessage("Email or password is missing in the credentials.");
        }
    } else {
        Bot.sendMessage("No valid credentials found.");
    }
} else {
    Bot.sendMessage("No credentials to display.");
}
