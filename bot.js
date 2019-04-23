let Discord = require('discord.js');
let bot = new Discord.Client();
let Commands = require('./commands/commands');

// Login using the unique Bot token
bot.login(process.env.BOT_TOKEN);


// Setting the activity of the Bot on the server
bot.on('ready', () => {
    bot.user.setActivity('Search the Matrix')
})

// Bot reception for news members
bot.on('guildMemberAdd', member => {
    member.createDM()
    .then(channel => {
       return channel.send('Bienvenue dans la Matrice ' + member.displayName);
    })
    .catch(console.error)
})

// Bot messages features
bot.on('message', message => {
    // Message reply for the "rb!google" command
    if (Commands.matchGoogle(message)) {
        return Google.action(message);
    }

    // Message reply for the "rb!gif" command
    if (Commands.matchGif(message)) {
        return Google.gifGenerator(message);
    }

    // Message reply for the "rb!ping" command
    if (message.content === 'rb!ping') {
        message.reply('pong');
    }
})