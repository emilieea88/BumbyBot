const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
 
const prefix = '!bb ';
 
const fs = require('fs');

const mySecret = process.env['bumbytoken']

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('BumbyBot is online!');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'bumby'){
        client.commands.get('bumby').execute(message,args);
    } else if (command == 'sleepy'){
        client.commands.get('sleepy').execute(message,args);
    } else if (command == 'smorch'){
        client.commands.get('smorch').execute(message,args);
    } else if (command == 'pic'){
        client.commands.get('pic').execute(message,args);
    } else if (command == 'commands'){
        client.commands.get('commands').execute(message,args);
    } else if (command == 'zz'){
        client.commands.get('zz').execute(message,args);
    }
});

client.login(mySecret);