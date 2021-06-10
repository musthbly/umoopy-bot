require("dotenv").config()
const Discord = require("discord.js")
const bot = new Discord.Client()
bot.login(process.env.TOKEN)

const fs = require("fs")
const path = require("path")
const images = fs.readdirSync(path.join(__dirname, "images"))

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`)
})

bot.on("message", message => {
  switch (message.content.toLowerCase().replace(/"|'/g, "")) {
    // TODO More variations
    case "groovy > umoopy":
    case "groovy is better than umoopy":
    case "groovy is greater than umoopy":
    case "groovys better than umoopy":
    case "groovys greater than umoopy":
    case "i dislike umoopy":
    case "i do not like umoopy":
    case "i dont like umoopy":
    case "i hate umoopy":
    case "umoopy is bad":
    case "umoopy is dumb":
    case "umoopy is stupid":
    case "umoopy sucks":
    case "umoopys bad":
    case "umoopys dumb":
    case "umoopys stupid":
      message.channel.send("i don't like your attitude!")
      break
    case "moopy":
      message.channel.send("heyheehawhaha")
      const file = images[Math.floor(Math.random() * images.length)]
      const attachment = new Discord.MessageAttachment(`images/${file}`, file)
      const embed = new Discord.MessageEmbed()
        .setTitle(file)
        .attachFiles(attachment)
        .setImage(`attachment://${file}`)
      message.channel.send(embed)
      break
    case "stocks":
      message.channel.send("buy umoopy stocks")
      break
  }
})
