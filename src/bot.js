require("dotenv").config();

const { Client, GatewayIntentBits, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(process.env.DISCORD_BOT_TOKEN);
