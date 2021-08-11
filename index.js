require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.TOKEN)

const fs = require('fs')
const path = require('path')
const images = fs.readdirSync(path.join(__dirname, 'images'))
const randomImage = () => {
  const file = images[Math.floor(Math.random() * images.length)]
  const attachment = new Discord.MessageAttachment(`images/${file}`, file)
  const embed = new Discord.MessageEmbed()
    .setTitle(file)
    .attachFiles(attachment)
    .setImage(`attachment://${file}`)
  return embed
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
})

bot.on('message', message => {
  switch (
    message.content
      .toLowerCase()
      .replace('\n', '')
      // Punctuation/markup
      .replace(/["'\-–—.,!?`~*_<>]/g, '')
      // Emoticons
      .replace(/[=;]/g, ':')
      .replace(/[|\\/]+/g, '|')
      .replace(/:?[()]+:?/g, '')
      // Whitespace must be trimmed after everything else is removed
      .trim()
      .replace(/\s+/g, ' ')
  ) {
    case 'i dislike the bot umoopy':
    case 'i dislike the umoopy bot':
    case 'i dislike umoopy':
    case 'i dislike u umoopy':
    case 'i dislike you umoopy':
    case 'i do not like the bot umoopy':
    case 'i do not like the umoopy bot':
    case 'i do not like umoopy':
    case 'i do not like u umoopy':
    case 'i do not like you umoopy':
    case 'i dont like the bot umoopy':
    case 'i dont like the umoopy bot':
    case 'i dont like umoopy':
    case 'i dont like u umoopy':
    case 'i dont like you umoopy':
    case 'i hate the bot umoopy':
    case 'i hate the umoopy bot':
    case 'i hate umoopy':
    case 'i hate u umoopy':
    case 'i hate you umoopy':
    case 'i strongly dislike the bot umoopy':
    case 'i strongly dislike the umoopy bot':
    case 'i strongly dislike umoopy':
    case 'i strongly dislike u umoopy':
    case 'i strongly dislike you umoopy':
    case 'umoopy is bad':
    case 'umoopy is crap':
    case 'umoopy is crappy':
    case 'umoopy is dumb':
    case 'umoopy is stupid':
    case 'umoopy is sucky':
    case 'umoopy sucks':
    case 'umoopys bad':
    case 'umoopys crap':
    case 'umoopys crappy':
    case 'umoopys dumb':
    case 'umoopys stupid':
    case 'umoopys sucky':
      message.channel.send("i don't like your attitude!")
      break
    case ':|':
    case '|:':
      message.channel.send('i :| you too!')
      break
    case '>:|':
    case '|:<':
      message.channel.send('i >:| you too!')
      break
    case ':}':
      message.channel.send('that\'s the spirit!')
      break
    case ':{':
      message.channel.send('’tis the season to be jolly')
      break
    // Misspelling of "okay"
    case 'oaky':
      message.channel.send('ouhahhkeyheyheehee')
      message.channel.send(randomImage())
      break
    case 'moopy':
      message.channel.send('heyheehawhaha')
      message.channel.send(randomImage())
      break
    case 'stocks':
      message.channel.send('buy umoopy stocks')
      break
  }
})
