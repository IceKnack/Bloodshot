require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const rover = require('rover-api');
const noblox = require('noblox.js')
const { default: Axios } = require('axios');

bot.login(TOKEN);

bot.on('ready', async() => {
  console.info(`Logged in as ${bot.user.tag}!`);
  await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4E29F54EFC266F42A20CFD52A79020239D9924E3A87D0BAE0BEE68CFC6D54BF8138E171BE5B31239B95B5702757455BF9E9E4683D16A52B567C41E85014B0B6D702789A12BCEC01F541679CF746D8EB8211BE0834948ABAA3BADEF8CCB4094D0124283FE6B07E63E82FC98FCCE1D453E8E7712AB196A04AA07802065BC85EFA58A6B9023FC9587452BD398B60905FBC68CA250BF56E98B9209A3EF50640BB8BED3161F65A61FA5907CBBC3A51BA134A844BC5AB8DCD374BE22C14E40B1293DDBD7A4DD405C90120E587A5B709CE1800E41A50C7217843679D3E05EA12B15C66248F7846DFDDDA48C9D3BBE381ACB7EFF3EBC9D57D9C953C5979D46450791E7A27BA2133120E7A4F5FCCE6133B27F065ACBB0B87B6C724E88ECBCFC64FDE61B7EA810AB1E')
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
