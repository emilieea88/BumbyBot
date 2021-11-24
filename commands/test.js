
const fs = require('fs');
const photos = './photos';

const bomel = fs.readdirSync(photos).length
console.log(bomel)
const buml = Math.floor(Math.random()*bomel);

const str1 = 'https://replit.com/@emilieea88/BumbyBot#photos/bumble_'
const str3 = '.jpg'

module.exports = {
    name: 'test',
    description: 'random bumby pic',
    execute(message, args){
        message.channel.send(str1.concat(String(buml), str3));
    }
}