require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const rover = require('rover-api');
const noblox = require('noblox.js')
const { default: Axios } = require('axios');
const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

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
