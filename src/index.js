const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
});
const { token } = require('../config/token.json');

client.on('ready', (client) => {
    console.log('Bot is online...');
//Reacts with 👍 and 👎 to the posts
    const rating = require('./rating');
    rating(client);
//Automatically deletes the messages without attachments
    const autoDelete = require('./autoDelete');
    autoDelete(client);
//Creates comment section using Threads
    const comments = require('./comments');
    comments(client);
});

client.login(token);
//npm run dev
