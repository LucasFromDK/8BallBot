const { Client, Events, GatewayIntentBits, ActivityType} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages,
GatewayIntentBits.GuildMessages, ], partials: ['MESSAGE', 'CHANNEL']
});

require('dotenv').config(); //Loads .env

//Makes bot go online
client.login(process.env.Bot_Token);
//

client.once(Events.ClientReady, onReady);

function onReady(c) {
console.log(`${c.user.tag} is now Online! 🥳 🎉`);
client.user.setActivity('Magic 8 Ball 🎱', { type: ActivityType.Playing });
client.user.setStatus('online');
};

client.on(Events.MessageCreate, onMessage);

function onMessage(msg) {
    if (msg.author.bot) return;
    if(msg.content.includes("hej")); {
        msg.reply("hej")
    }
}