let Discord = require('discord.js');
let bot = new Discord.Client();
let Google = require('./commands/google');


bot.login(process.env.BOT_TOKEN);



bot.on('ready', () => {
    bot.user.setActivity('Search the Matrix')
})

bot.on('guildMemberAdd', member => {
    member.createDM()
    .then(channel => {
       return channel.send('Bienvenue dans la Matrice ' + member.displayName);
    })
    .catch(console.error)
})

bot.on('message', message => {
    if (Google.match(message)) {
        return Google.action(message);
    }
    if (Google.match2(message)) {
        return Google.gifGenerator(message);
    }

    if (message.content === '!ping') {
        message.reply('pong');
        //message.channel.send('pong');
    }
})