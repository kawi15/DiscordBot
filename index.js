const Discord = require('discord.js');
const mySecret = process.env['TOKEN']
const client = new Discord.Client();
const keep_alive = require('./keep_alive.js');
const { prefix } = require('./config.json');
const cron = require('node-cron');
const cron1 = require('cron');
const express = require('express');
const fetch = require('node-fetch');

/*app = express();

cron.schedule('* * * * *', function() {
  let timestamp = Date.now();
  let date = new Date(timestamp);
  console.log('running a task every minute');
  console.log(date);
  let channel = client.channels.cache.get(`693855591570997348`);
  //channel.send('running a task every minute');
});

app.listen(3000);*/

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

let scheduledMessage = new cron1.CronJob('18 18 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  console.log("test")
  let channel = client.channels.cache.get(`693855591570997348`);
  //channel.send('test');
});

scheduledMessage.start();

client.on("message", msg => {
  if (msg.content.toLowerCase() === `ping` && !msg.author.bot) {
    msg.channel.send("pong");
  }
  else if (msg.content.toLowerCase() === "pong" && !msg.author.bot) {
    msg.channel.send("ping");
  }
  else if (msg.content === `${prefix}server`) {
    msg.channel.send
    (`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
  }
  else if (msg.content === `beep`) {
    msg.channel.send(`boop`);
  }
})


// WYSYLANIE PRYWATNYCH WIADOMOSCI
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.id === '623476836118036481'){
    /*let mentionDM = message.mentions.users.first();
    console.log(mentionDM)
    let chan = message.guild.channels.cache.find(c => c.id === '733401547245092990')
    chan.members.forEach((x) => {
      console.log('test', x.user.username)
    })
    if (!mentionDM)
      return console.log('No mentioned user');

    let mentionMessage = message.content.slice(22);
    let authorMessage = message.author.username;
    let textMessage = 'Send by: ' + authorMessage + ', message: ' + mentionMessage
    mentionDM.send(textMessage);*/

    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    if (true) {
      //kawi
      client.users.fetch('367206386104401920', false).then((user) => {
        user.send('Cześć kawi, ' + message.content + '\n' +  file);
      });

      //razno
      client.users.fetch('382921418452500481', false).then((user) => {
        user.send('Cześć razno, ' + message.content + '\n' +  file);
      });

      //Adrian
      client.users.fetch('820278073059442728', false).then((user) => {
        user.send('Cześć Adi, ' + message.content + '\n' +  file);
      });

      //Huzar
      client.users.fetch('631930373139333150', false).then((user) => {
        user.send('Cześć Huzar, ' + message.content + '\n' +  file);
      });

      //Coehoorn
      client.users.fetch('271233421013942273', false).then((user) => {
        user.send('Cześć Coe, ' + message.content + '\n' +  file);
      });

      //Banan
      client.users.fetch('646120622438744095', false).then((user) => {
        user.send('Cześć Banan, ' + message.content + '\n' +  file);
      });

      //Exelend
      client.users.fetch('127069888165576704', false).then((user) => {
        user.send('Cześć Exel, ' + message.content + '\n' +  file);
      });

      //Cebul
      client.users.fetch('616954961535827988', false).then((user) => {
        user.send('Cześć Cebul, ' + message.content + '\n' +  file);
      });

      //Endevor
      client.users.fetch('494913521855758337', false).then((user) => {
        user.send('Cześć Endevor, ' + message.content + '\n' +  file);
      });

      //Endriu
      client.users.fetch('347741569937309706', false).then((user) => {
        user.send('Cześć Endriu, ' + message.content + '\n' +  file);
      });

      //Formix
      client.users.fetch('427449599184207873', false).then((user) => {
        user.send('Cześć Formix, ' + message.content + '\n' +  file);
      });

      //Grzesiek
      client.users.fetch('617053428102987815', false).then((user) => {
        user.send('Cześć Grzesiek, ' + message.content + '\n' +  file);
      });

      //gurolek
      client.users.fetch('421994920874868737', false).then((user) => {
        user.send('Cześć Gurolek, ' + message.content + '\n' +  file);
      });

      //kubat
      client.users.fetch('512720691083345951', false).then((user) => {
        user.send('Cześć Kubat, ' + message.content + '\n' +  file);
      });

      //ksywa
      client.users.fetch('495265854473109534', false).then((user) => {
        user.send('Cześć Ksywa, ' + message.content + '\n' +  file);
      });

      //mamrot
      client.users.fetch('616961405958225950', false).then((user) => {
        user.send('Cześć Mamrocik, ' + message.content + '\n' +  file);
      });

      //papcio
      client.users.fetch('248865828739481602', false).then((user) => {
        user.send('Cześć Papcio, ' + message.content + '\n' +  file);
      });

      //ayama
      client.users.fetch('525598025301622799', false).then((user) => {
        user.send('Cześć Ayama, ' + message.content + '\n' +  file);
      });

      //seylak
      client.users.fetch('501122613687353344', false).then((user) => {
        user.send('Cześć Seylak, ' + message.content + '\n' +  file);
      });

      //snopek
      client.users.fetch('622131194967883797', false).then((user) => {
        user.send('Cześć Snopek, ' + message.content + '\n' +  file);
      });

      //thopson
      client.users.fetch('617052091785019452', false).then((user) => {
        user.send('Cześć Tomek, ' + message.content + '\n' +  file);
      });

      //xyro
      client.users.fetch('525598025301622799', false).then((user) => {
        user.send('Cześć Xyro, ' + message.content + '\n' +  file);
      });

      console.log('Message Sent!');
    }
    
  }
})

// LOSOWE OBRAZKI KOTOW
client.on('message', async message => {
	if (message.content === `${prefix}cat`) {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
  }
});


// NIEDOKONCZONA WOT FUNKCJONALNOSC
client.on('message', async message => {
	// ...
	// Using the new `command` variable, this makes it easier to manage!
	// You can switch your other commands to this format as well
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
	if (command === `wot`) {
    
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
    const url = `https://api.worldoftanks.eu/wot/account/list/?application_id=7c9ab215a486926e9669cd51d20425dd&search=${args[0]}`
    console.log(url)
    await fetch(`https://api.worldoftanks.eu/wot/account/list/?application_id=7c9ab215a486926e9669cd51d20425dd&search=${args[0]}`).then(response => response.json())
    .then(function(data) {
      message.channel.send(data.data)
      console.log(data.data.account_id)
    })
		//message.channel.send(list);
	}
});



client.on("message", msg => {
  if (msg.content === `${prefix}coub`) {
    msg.channel.send(`tu będą linki do coubów`)
  }
})

client.on("message", msg => {
  if (msg.content.toLowerCase() === "czosnek out") {
    msg.channel.send({
      files: [
        "./binds/czosnek wypierdalaj.mp3"
      ]
    })
  }
  else if (msg.content.toLowerCase() === "formix krzaki") {
    msg.channel.send({
      files: [
        "./binds/formix krzaki.mp3"
      ]
    })
  }
  else if (msg.content.toLowerCase() === "kawi noob") {
    msg.channel.send({
      files: [
        "./binds/kawi noob.mp3"
      ]
    })
  }
})

client.login(mySecret);