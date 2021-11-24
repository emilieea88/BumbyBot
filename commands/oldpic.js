const bumble = [
    'https://imgur.com/7AN4g5e',
    'https://imgur.com/chMyQL8',
    'https://imgur.com/YuWflmO',
    'https://imgur.com/3vwJ0Th',
    'https://imgur.com/K4GcWvb',
    'https://imgur.com/Bn9wNW6',
    'https://imgur.com/ioV6gfd',
    'https://imgur.com/6ObnLMM',
    'https://imgur.com/SnJq5xP',
    'https://imgur.com/8dCA9oX',
    'https://imgur.com/r2iEpqd',
    'https://imgur.com/AE5YkkU',
    'https://imgur.com/3iAePwX',
    'https://imgur.com/5hnVSw1',
    'https://imgur.com/8zE2wFV',
    'https://imgur.com/DgatIUN',
    'https://imgur.com/AkYqwNo',
    'https://imgur.com/LSCFgCy',
    'https://imgur.com/DAHCaA2',
    'https://imgur.com/nERRGwh',
    'https://imgur.com/o1O8zoA',
    'https://replit.com/@emilieea88/BumbyBot#photos/bumble_1.JPG',
    'https://replit.com/@emilieea88/BumbyBot#photos/bumble_2.JPG',
    'https://replit.com/@emilieea88/BumbyBot#photos/bumble_3.JPG'
];

function randomBumbyPic(array){
    let randomNum = Math.floor(Math.random()*array.length);
    return array[randomNum];
}

module.exports = {
    name: 'pic',
    description: 'random bumby pic',
    execute(message, args){
        message.channel.send(randomBumbyPic(bumble));
    }
}