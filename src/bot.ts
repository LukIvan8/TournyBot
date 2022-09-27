// Imports
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");
//



async () => {
    // Client instance (??)
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(token);
    console.log("ready!")
    

    
//     client.commands = new Collection();
//     const functionFolders = fs.readdirSync(`./src/functions`);


//     for (const folder of functionFolders) {
//         const functionFiles = fs
//           .readdirSync(`./src/functions/${folder}`)
//           .filter((file: string) => file.endsWith(".js"));
//           for(const file of functionFiles){
//               require(`./functions/${folder}/${file}`)(client)
//           }
//       }
// }
}


// When the client is ready, run this code (only once)

