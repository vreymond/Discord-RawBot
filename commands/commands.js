const fetch = require("node-fetch");
// Giphy API token
const giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";


module.exports = class Commands {

    static matchGoogle(message) {
        return message.content.startsWith('rb!google');
    }
    // return a message with a google link
    static actionGoogle (message) {
        let args = message.content.split(' ');
        args.shift();
        message.reply("De retour des archives, ça m'a pris du temps mais j'ai trouvé:")
        message.channel.send('https://www.google.fr/#q=' + args.join('%20'));
    }

    static matchGif (message) {
        return message.content.startsWith('rb!gif');
    }

    // return a random gif
    static async gifGenerator (message) {
        let response = await fetch(giphyAPI + message);
        let json = await response.json();
        let img_url = json.data[Math.floor(Math.random()*json.data.length)].images['fixed_height_small'].url;
        message.reply(img_url);
    }
}