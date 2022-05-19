module.exports = (client) => {
    const { channel_1, channel_2, channel_3, channel_4, channel_5 } = require('../config/channels.json');
    const channels = [ channel_1, channel_2, channel_3, channel_4, channel_5 ]

    client.on('messageCreate', async (message) => {
        if (message.author.bot) return;
        if (channels.includes(message.channelId) && message.attachments.size === 0) {
            await message.channel.send({
                content: `${message.author}, please add an attachment before sending a message here! >_<`
            }).then(msg => {
                setTimeout(() => msg.delete(), 2500);
            })
            await message.delete();
        }
    })
}
