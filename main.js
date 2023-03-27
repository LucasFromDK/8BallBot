//Rules Embed: https://kortlink.dk/2kdbz

const { Client, Collection, Events, GatewayIntentBits, ActivityType} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages], partials: ['MESSAGE', 'CHANNEL']});

require('dotenv').config(); //Loads .env

//Makes bot go online, 🎉
client.login(process.env.Bot_Token);
//

client.once(Events.ClientReady, onReady);

function onReady(c) {
console.log(`${c.user.tag} is now Online! 🥳 🎉`);
client.user.setActivity('The Magic 8 Ball 🎱', { type: ActivityType.Watching }); //Options: Watching, Playing, Streaming, Listening, Competing
client.user.setStatus('online'); //Options: online, idle, dnd, invisible
};

client.on(Events.MessageCreate, onMessage);

function onMessage(msg) {
    if (msg.author.bot) return;
    if(msg.content.toLowerCase().includes("!help")) {
        msg.reply("**Commands:**\n<@1088016851403026462> !ask (Question) \nMore Commands Coming Soon")
    } else if(msg.content.toLowerCase().includes("!help")) {
        const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "	Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
        let response = responses[Math.floor(Math.random() * responses.length)]
        msg.reply(response)
        console.log("User Asked: " + msg.content +", Random Answer: " + response)

    } else if(msg.content.toLowerCase().includes("!roll")) {
        args = msg.split(" +/") //Converts to Arguments
        args.shift().toLowerCase() //Makes it lowercase

        const numbers = ["https://media.tenor.com/Welm8xB9ixQAAAAC/zero-no.gif", //Zero
                        "https://media.tenor.com/mRsNLeYI_qIAAAAC/only-one-alone-there-can-be-only-one.gif", //One
                        "https://media.tenor.com/W7wOWaM9zP4AAAAd/dancing-justin-h-min.gif", //Two
                        "https://media.tenor.com/oRFRlKfQtHwAAAAC/fist-fight-ice-cube.gif", //Three
                        "https://media.tenor.com/QHxQ6xqJTZQAAAAC/four-four-fingers-up.gif", //Four
                        "https://media.tenor.com/8dfMnQGTqtIAAAAC/five-number5.gif", //Five
                        "https://media.tenor.com/nhqm85B6XmsAAAAC/number-six.gif", //Six
                        "https://media.tenor.com/Kp8Spq2GRV4AAAAd/seven-sette.gif", //Seven
                        "https://media.tenor.com/c0j8qvkYhY0AAAAd/dracula-eight.gif", //Eight
                        "https://media.tenor.com/RBS0zRlT2oUAAAAC/nine-number-nine.gif", //Nine
                        "https://media.tenor.com/PwVvhNmOHcEAAAAC/ten-score.gif"] //Ten
    }
}