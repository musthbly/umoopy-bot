require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.TOKEN)

const fs = require('fs')
const path = require('path')
const images = fs.readdirSync(path.join(__dirname, 'images'))
const randomImage = message => {
  const file = images[Math.floor(Math.random() * images.length)]
  const attachment = new Discord.MessageAttachment(`images/${file}`, file)
  const embed = new Discord.MessageEmbed()
    .setTitle(file)
    .attachFiles(attachment)
    .setImage(`attachment://${file}`)
  message.channel.send(embed)
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
      .replace(/"|'|-|–|—|\.|,|!|`|~|\*|>/g, '')
      // Emoticons
      .replace(/=|;/, ':')
      .replace(/\\|\//, '|')
      .replace(/:(\)\)*|\(\(*)|(\)\)*|\(\(*):/, '')
      // Whitespace must be trimmed after everything else is removed
      .trim()
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
    case 'i :| u':
    case 'i :| you':
    case 'i |: u':
    case 'i |: you':
    case 'i :| u umoopy':
    case 'i :| you umoopy':
    case 'i |: u umoopy':
    case 'i |: you umoopy':
      message.channel.send('i :| you too!')
      break
    case '>:|':
    case '|:<':
    case 'i >:| u':
    case 'i >:| you':
    case 'i |:< u':
    case 'i |:< you':
    case 'i >:| u umoopy':
    case 'i >:| you umoopy':
    case 'i |:< u umoopy':
    case 'i |:< you umoopy':
      message.channel.send('i >:| you too!')
      break
    case 'what is ur fav animal':
    case 'what is ur fav animal umoopy':
    case 'what is ur fave animal':
    case 'what is ur fave animal umoopy':
    case 'what is ur favorite animal':
    case 'what is ur favorite animal umoopy':
    case 'what is your fav animal':
    case 'what is your fav animal umoopy':
    case 'what is your fave animal':
    case 'what is your fave animal umoopy':
    case 'what is your favorite animal':
    case 'what is your favorite animal umoopy':
    case 'whats ur fav animal':
    case 'whats ur fav animal umoopy':
    case 'whats ur fave animal':
    case 'whats ur fave animal umoopy':
    case 'whats ur favorite animal':
    case 'whats ur favorite animal umoopy':
    case 'whats your fav animal':
    case 'whats your fav animal umoopy':
    case 'whats your fave animal':
    case 'whats your fave animal umoopy':
    case 'whats your favorite animal':
    case 'whats your favorite animal umoopy':
      message.channel.send('the cucumber is a majestic creature')
      message.channel.send('https://wikipedia.org/wiki/Cucumber')
      break
    // Misspelling of "okay"
    case 'oaky':
      message.channel.send('ouhahhkeyheyheehee')
      randomImage(message)
      break
    case 'moopy':
      message.channel.send('heyheehawhaha')
      randomImage(message)
      break
    case 'stocks':
      message.channel.send('buy umoopy stocks')
      break
  }
})
