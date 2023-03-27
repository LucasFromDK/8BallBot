//Rules Embed: https://kortlink.dk/2kdbz

const { Client, Events, GatewayIntentBits, ActivityType} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages,
GatewayIntentBits.GuildMessages, ], partials: ['MESSAGE', 'CHANNEL']
});

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
    if(msg.content.toLowerCase().includes("!ask")) {
        const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "	Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
        let response = responses[Math.floor(Math.random() * responses.length)]
        msg.reply(response)
        console.log("Random Answer: " + response)
    }
}