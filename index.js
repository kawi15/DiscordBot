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

client.on('message', async message => {
	if (message.content === `${prefix}cat`) {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
  }
});



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