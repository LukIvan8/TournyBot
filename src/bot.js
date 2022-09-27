// Require the necessary discord.js classes
const { REST, Client, GatewayIntentBits, Routes } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "channels") {
    await interaction.reply(
      `Server's channel list: ${interaction.guild.channels.cache
        .map((channel) => channel.name)
        .join(", ")}`);
  } else if (commandName === "user") {
    await interaction.reply(`User info.`);
  } else if (commandName === "server"){
    await interaction.reply(`Server birth: ${interaction.guild.createdAt}\nServer id: ${interaction.guild.id}\nMember count: ${interaction.guild.memberCount}`)
  }
});

client.login(token);
