module.exports = (client) => {
    const { channel_1, channel_2, channel_3, channel_4, channel_5 } = require('../config/channels.json');
    const channels = [channel_1, channel_2, channel_3, channel_4, channel_5];

    client.on('messageCreate', async (message) => {
        if (channels.includes(message.channelId) && message.attachments.size >= 1) {
            await message.react('👍');
            await message.react('👎');
        }
    })
}