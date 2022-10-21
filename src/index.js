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

    const rating = require('./rating');
    rating(client);

    const autoDelete = require('./autoDelete');
    autoDelete(client);

    const comments = require('./comments');
    comments(client);
});

client.login(token);
