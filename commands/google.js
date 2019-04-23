const giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";
const fetch = require("node-fetch");

module.exports = class Google {

    static match(message) {
        return message.content.startsWith('rb!google');
    }

    static action (message) {
        let args = message.content.split(' ');
        args.shift();
        message.reply("De retour des archives, ça m'a pris du temps mais j'ai trouvé:")
        message.channel.send('https://www.google.fr/#q=' + args.join('%20'));
    }

    static match2 (message) {
        return message.content.startsWith('rb!gif');
    }

    static async gifGenerator (message) {
        let response = await fetch(giphyAPI + message);
        let json = await response.json();
        let img_url = json.data[Math.floor(Math.random()*json.data.length)].images['fixed_height_small'].url;
        message.reply(img_url);
    }
}