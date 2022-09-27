const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");




async () => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(token);
    console.log("ready!")
}


