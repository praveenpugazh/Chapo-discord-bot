require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER"],
});

const prefixCommand = "!";

client.on("ready", () => {
  console.log(`Our bot is ready to go!!!`);
});
client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});
client.on("message", (msg) => {
  if (msg.content === `${prefixCommand}ping`) {
    msg.reply("pong");
  }
  if (msg.content === `${prefixCommand}poda`) {
    msg.reply("poda lusu ku");
  }
  if (msg.content === `${prefixCommand}mod-me-bot`) {
    msg.member.roles.add("808008979325255751");
  }
  if (msg.content === `${prefixCommand}i love js`) {
    msg.channel.send("we ❤ js");
    msg.react("❤");
  }
});
client.login(process.env.BOT_TOKEN);
