const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "q3";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "509357857666236430"; // 513523990644654110
var channel = "509357857666236434";// 515244389606359061
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , creditDream , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
