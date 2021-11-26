const fs = require('fs');
const photos = './photos';
const pl = fs.readdirSync(photos).length;
console.log(pl);

const str1 = 'https://raw.githubusercontent.com/emilieea88/BumbyBot/main/photos/bumble_';
const str3 = '.jpg';

module.exports = {
    name: 'pic',
    description: 'random bumby pic',
    execute(message, args){
        message.channel.send(str1.concat(String((Math.floor(Math.random()*(fs.readdirSync(photos).length)))), str3));
    }
}