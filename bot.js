require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const rover = require('rover-api');
const noblox = require('noblox.js')
const { default: Axios } = require('axios');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

bot.login(TOKEN);

bot.on('ready', async() => {
  console.info(`Logged in as ${bot.user.tag}!`);
  await noblox.setCookie(process.env.ROBLOXTOKEN)
});

bot.on('message', async (msg) => {
  if (msg.content == ",status"){
    msg.reply(`bot is online as: ${bot.user.tag}`)
  } else if (msg.content.includes(",user")){
    if (msg.mentions.members.first()){
      let body = await rover(msg.mentions.members.first().id)
      msg.reply(`${msg.mentions.members.first().user.username} is ${body.robloxUsername}`)
    } else {
      let body = await rover(msg.author.id)
      msg.reply(`you are ${body.robloxUsername}`)
    }
})
