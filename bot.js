require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const rover = require('rover-api');
const noblox = require('noblox.js')
const {default: Axios} = require('axios');
let prefix = "!"

bot.on('ready', async () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    await noblox.setCookie(process.env.ROBLOXTOKEN)
})

bot.on('message', async (msg) => {
  if (msg.content.startsWith(prefix)){
    let command = msg.content.slice(1)
    if (command.includes("status")){
      msg.channel.send(`Success! Logged in as ${bot.user.tag}`)
    } else if(command.includes("ban")){
      if (msg.member.roles.has(`729862364194799658`)){
        let player = command.slice(5)
        msg.reply(player)
      }
    }
  }
})

bot.login(TOKEN)
