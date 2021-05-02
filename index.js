const Discord = require('discord.js');
const mySecret = process.env['TOKEN']
const client = new Discord.Client();
const keep_alive = require('./keep_alive.js');
const { prefix } = require('./config.json');


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === `ping` && !msg.author.bot) {
    msg.channel.send("pong");
  }
  else if (msg.content === "pong" && !msg.author.bot) {
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

client.on("message", msg => {
  if (msg.content === "wtf") {
    msg.reply("co cię zdziwiło?");
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