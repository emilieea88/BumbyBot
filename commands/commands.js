module.exports = {
    name: 'commands',
    description: 'this is all commands',
    execute(message,args){
        message.channel.send('Current commands are !bb bumby, !bb sleepy, !bb zz, !bb smorch, and !bb pic');
    }
}