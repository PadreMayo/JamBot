const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '%';





client.once('ready', () => {
    console.log('JamBot is Online!');
    client.user.setActivity('👀 The Jamboard', { type: 'WATCHING'})
 
})


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('🏓 pong!');
    } else if (command == 'mistar'){
        message.channel.send('https://webconnect.bloomfield.org/zangle/StudentPortal/Home/PortalMainPage');    
    
    } else if (command == 'managebac'){
        message.channel.send('https://interacademy.managebac.com/student/ib/projects/myp/reflections'); 
    
    } else if (command == 'ia'){
        message.channel.send('https://www.iatoday.org')
    
    } else if (command == 'help'){
        message.channel.send('You Have Triggered Help Mode! The Usable Commands are: 1. managebac 2. ia 3. mistar')
    
    } 
       
 
      
        
        
        

    
})







client.login('ODI5MDU5MjY4OTI5MTI2NDQw.YGynnA.ReYNO3EIiz9S832C650HPNHr230')
