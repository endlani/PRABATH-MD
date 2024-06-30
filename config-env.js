
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID,PRABATH-MD~FUghAKYA#-G5HieCTYWcg9nWOyBZcxupA1w9R788GJKnwvtEVq08
    BOT_NUMBER:  process.env.BOT_NUMBER,263784543213
    GITHUB_USERNAME: username,endlani
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
};
