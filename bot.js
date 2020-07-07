require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const rover = require('rover-api');
const noblox = require('noblox.js')
const {default: Axios} = require('axios');
let prefix = "!"

bot.on('ready', async () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    await noblox.setCookie(process.env.ROBLOXTOKEN)
})

bot.on('message', async (msg) => {
  if (msg.content.startsWith(prefix)){
    let command = msg.content.slice(2)
    msg.channel.send(command)
  }
})

bot.login(TOKEN)
