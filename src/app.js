const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();
import { DISCORD_TOKEN } from './constants.js';
client.on('ready', () => {
    console.log('Got in big boi');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(DISCORD_TOKEN);