const Discord = require("discord.js");
require("dotenv").config();
const mySecret = process.env["TOKEN"];
const appId = process.env["APP_ID"];
const client = new Discord.Client();
const keep_alive = require("./keep_alive.js");
const { prefix } = require("./config.json");
const cron = require("node-cron");
const cron1 = require("cron");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

// TODO do poprawki
async function getMoe(id) {
  let json = await fetch(
    `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${id}&fields=achievements`,
  ).then((response) => response.json());
  let moeCount = 0;
  jsonData = json.data[id];
  jsonData.forEach((arr) => {
    if (arr["achievements"]["marksOnGun"] != null) {
      if (arr["achievements"]["marksOnGun"] == 3) {
        moeCount++;
      }
    }
  });
  //console.log(moeCount);
  //return moeCount;
}

// Pomocnicza funkcja do dzielenia tablicy na kawałki
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Funkcja do pobierania ID gracza na podstawie nicku
async function getAccountId(nickname) {
  const url = `https://api.worldoftanks.eu/wot/account/list/?application_id=${appId}&search=${nickname}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const player = data?.data?.[0];

    if (!player) {
      return null; // Gracz nie znaleziony
    }

    return player.account_id;
  } catch (error) {
    console.error(`Błąd przy pobieraniu ID gracza ${nickname}:`, error);
    return null;
  }
}

/*app = express();

cron.schedule('* * * * *', function() {
  let timestamp = Date.now();
  let date = new Date(timestamp);
  console.log('running a task every minute');
  console.log(date);
  let channel = client.channels.cache.get(`693855591570997348`);
  //channel.send('running a task every minute');
});

app.listen(3000);*/

// TODO do zmiany
function dateDifference() {
  let datePaczki = new Date("12/09/2022");
  let timestamp = Date.now();
  let today = new Date(timestamp);

  let differenceInTime =
    datePaczki.getTime() - today.getTime() + 8 * 3600 * 1000; // w nawiasie ręcznie dodane 8 godzin
  let differenceInHours = differenceInTime / (1000 * 3600);
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  let finalValue = differenceInDays | 0;

  let str = `Do świątecznych paczek zostało ${finalValue} dni czyli ${differenceInHours | 0} godzin.`;
  return str;
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// WYSYLANIE WIADOMOSCI ILE BRAKUJE DO PACZEK
/*let scheduledMessage = new cron1.CronJob("00 07 * * *", () => {
  // This runs every day at 10:30:00, you can do anything you want

  let channel = client.channels.cache.get(`733401547245092990`);
  channel.send(dateDifference());
}); */

/*let christmasBoxesArrived = new cron1.CronJob("00 07 09 11 *", () => {
  let channel = client.channels.cache.get(`910471078999126036`);
  channel.send("@everyone" + " " + "PACZKI PACZKI PACZKI PACZKI!!!!");
});*/

//scheduledMessage.start();
//christmasBoxesArrived.start();

// PING PONG i INNE KOMENDY BOTA
client.on("message", async (msg) => {
  if (msg.content.toLowerCase() === `ping` && !msg.author.bot) {
    msg.channel.send(`pong`);
  } else if (msg.content.toLowerCase() === "pong" && !msg.author.bot) {
    msg.channel.send("ping");
  } else if (msg.content === `${prefix}server`) {
    msg.channel.send(
      `Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`,
    );
  } else if (msg.content === `beep`) {
    msg.channel.send(`boop`);
  } else if (msg.content === `${prefix}paczki`) {
    msg.channel.send(dateDifference());
  } else if (msg.content === `${prefix}cat`) {
    const { file } = await fetch("https://aws.random.cat/meow").then(
      (response) => response.json(),
    );
    message.channel.send(file);
  }
});

// WYSYLANIE PRYWATNYCH WIADOMOSCI
client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id === "623476836118036481") {
    /*let mentionDM = message.mentions.users.first();
    console.log(mentionDM)
    let chan = message.guild.channels.cache.find(c => c.id === '733401547245092990')
    chan.members.forEach((x) => {
      console.log('test', x.user.username)
    })
    if (!mentionDM)
      return console.log('No mentioned user');

    let mentionMessage = message.content.slice(22);
    let authorMessage = message.author.username;
    let textMessage = 'Send by: ' + authorMessage + ', message: ' + mentionMessage
    mentionDM.send(textMessage);*/

    const { file } = await fetch("https://aws.random.cat/meow").then(
      (response) => response.json(),
    );
    if (true) {
      //kawi
      client.users.fetch("367206386104401920", false).then((user) => {
        user.send("Cześć kawi, " + message.content + "\n" + file);
      });

      //razno
      client.users.fetch("382921418452500481", false).then((user) => {
        user.send("Cześć razno, " + message.content + "\n" + file);
      });

      //Adrian
      client.users.fetch("820278073059442728", false).then((user) => {
        user.send("Cześć Adi, " + message.content + "\n" + file);
      });

      //Huzar
      client.users.fetch("631930373139333150", false).then((user) => {
        user.send("Cześć Huzar, " + message.content + "\n" + file);
      });

      //Bajera
      client.users.fetch("271233421013942273", false).then((user) => {
        user.send("Cześć Coe, " + message.content + "\n" + file);
      });

      //Coehoorn
      client.users.fetch("476437095422885927", false).then((user) => {
        user.send("Cześć Coe, " + message.content + "\n" + file);
      });

      //Banan
      client.users.fetch("646120622438744095", false).then((user) => {
        user.send("Cześć Banan, " + message.content + "\n" + file);
      });

      //Exelend
      client.users.fetch("127069888165576704", false).then((user) => {
        user.send("Cześć Exel, " + message.content + "\n" + file);
      });

      //Cebul
      client.users.fetch("616954961535827988", false).then((user) => {
        user.send("Cześć Cebul, " + message.content + "\n" + file);
      });

      //Endevor
      client.users.fetch("494913521855758337", false).then((user) => {
        user.send("Cześć Endevor, " + message.content + "\n" + file);
      });

      //Endriu
      client.users.fetch("347741569937309706", false).then((user) => {
        user.send("Cześć Endriu, " + message.content + "\n" + file);
      });

      //Formix
      client.users.fetch("427449599184207873", false).then((user) => {
        user.send("Cześć Formix, " + message.content + "\n" + file);
      });

      //Grzesiek
      client.users.fetch("617053428102987815", false).then((user) => {
        user.send("Cześć Grzesiek, " + message.content + "\n" + file);
      });

      //gurolek
      client.users.fetch("421994920874868737", false).then((user) => {
        user.send("Cześć Gurolek, " + message.content + "\n" + file);
      });

      //kubat
      client.users.fetch("512720691083345951", false).then((user) => {
        user.send("Cześć Kubat, " + message.content + "\n" + file);
      });

      //ksywa
      client.users.fetch("495265854473109534", false).then((user) => {
        user.send("Cześć Ksywa, " + message.content + "\n" + file);
      });

      //mamrot
      client.users.fetch("616961405958225950", false).then((user) => {
        user.send("Cześć Mamrocik, " + message.content + "\n" + file);
      });

      //papcio
      client.users.fetch("248865828739481602", false).then((user) => {
        user.send("Cześć Papcio, " + message.content + "\n" + file);
      });

      //ayama
      client.users.fetch("525598025301622799", false).then((user) => {
        user.send("Cześć Ayama, " + message.content + "\n" + file);
      });

      //seylak
      client.users.fetch("501122613687353344", false).then((user) => {
        user.send("Cześć Seylak, " + message.content + "\n" + file);
      });

      //snopek
      client.users.fetch("622131194967883797", false).then((user) => {
        user.send("Cześć Snopek, " + message.content + "\n" + file);
      });

      //thopson
      client.users.fetch("617052091785019452", false).then((user) => {
        user.send("Cześć Tomek, " + message.content + "\n" + file);
      });

      //xyro
      client.users.fetch("617051760519020545", false).then((user) => {
        user.send("Cześć Xyro, " + message.content + "\n" + file);
      });

      console.log("Message Sent!");
    }
  }
});

// ILOSC MOE
client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  if (command === `wot`) {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`,
      );
    }

    const nick = args[0];

    try {
      const accountId = await getAccountId(nick);
      if (!accountId) {
        return message.channel.send(`Nie znaleziono gracza o nazwie "${nick}".`);
      }
      const achievementsUrl = `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${accountId}&fields=achievements`;
      const achievementsResponse = await fetch(achievementsUrl);
      const achievementsData = await achievementsResponse.json();

      const tanks = achievementsData?.data?.[accountId];
      if (!tanks || !Array.isArray(tanks)) {
        return message.channel.send(`Nie udało się pobrać osiągnięć gracza.`);
      }

      const moeCount = tanks.reduce((count, tank) => {
        return tank?.achievements?.marksOnGun === 3 ? count + 1 : count;
      }, 0);

      return message.channel.send(
        `Gracz **${nick}** ma ${moeCount} czołgów z 3 MoE.`,
      );
    } catch (error) {
      console.error("Błąd przy pobieraniu danych:", error);
      return message.channel.send(
        `Wystąpił błąd podczas przetwarzania żądania.`,
      );
    }
  }
});

// ILOSC MOE WG TIERU
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'tier') {
    if (!args.length) {
      return message.channel.send(`Nie podałeś nazwy gracza, ${message.author}!`);
    }

    const nickname = args[0];

    try {
      const accountId = await getAccountId(nickname);
      if (!accountId) {
        return message.channel.send(`Nie znaleziono gracza o nazwie "${nickname}".`);
      }
      const achievementsUrl = `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${accountId}&fields=achievements,tank_id`;
      const achievementsRes = await fetch(achievementsUrl);
      const achievementsData = await achievementsRes.json();
      const tanks = achievementsData?.data?.[accountId] || [];

      const tierCounts = {
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
      };

      // Zbieramy wszystkie tank_id z 3x MoE
      const tankIdsWith3MoE = tanks
        .filter(t => t?.achievements?.marksOnGun === 3)
        .map(t => t.tank_id);

      // Jeśli brak czołgów z 3 MoE
      if (tankIdsWith3MoE.length === 0) {
        return message.channel.send(`Gracz **${nickname}** nie ma żadnych czołgów z 3 MoE.`);
      }

      // Pobieramy dane o czołgach z encyklopedii (maks 100 na raz)
      const tankChunks = chunkArray(tankIdsWith3MoE, 100);
      for (const chunk of tankChunks) {
        const ids = chunk.join(',');
        const tanksUrl = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${appId}&tank_id=${ids}&fields=tier`;
        const tanksRes = await fetch(tanksUrl);
        const tanksData = await tanksRes.json();

        for (const tankId in tanksData.data) {
          const tier = tanksData.data[tankId]?.tier;
          if (tierCounts[tier] !== undefined) {
            tierCounts[tier]++;
          }
        }
      }

      const tierText = Object.entries(tierCounts)
        .map(([tier, count]) => `Tier ${tier}: ${count}`)
        .join('\n');

      return message.channel.send(`Gracz **${nickname}** ma następującą ilość 3 MoE wg tieru:\n${tierText}\nSuma: ${tankIdsWith3MoE.length}`);

    } catch (error) {
      console.error('Błąd w komendzie tier:', error);
      return message.channel.send('Wystąpił błąd podczas przetwarzania komendy.');
    }
  }
});

// ROZNICA MOE miedzy gurolkiem a kawi15, do zmiany
client.on("message", async (message) => {
  const kawi = 502647545;
  const gurolek = 503269826;
  if (message.content === `${prefix}diff`) {
    let gurolekJson = await fetch(
      `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${gurolek}&fields=achievements`,
    ).then((response) => response.json());
    let gurolekCount = 0;
    jsonData = gurolekJson.data[gurolek];
    jsonData.forEach((arr) => {
      if (arr["achievements"]["marksOnGun"] != null) {
        if (arr["achievements"]["marksOnGun"] == 3) {
          gurolekCount++;
        }
      }
    });

    let kawiJson = await fetch(
      `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${kawi}&fields=achievements`,
    ).then((response) => response.json());
    let kawiCount = 0;
    kawiJsonData = kawiJson.data[kawi];
    kawiJsonData.forEach((arr) => {
      if (arr["achievements"]["marksOnGun"] != null) {
        if (arr["achievements"]["marksOnGun"] == 3) {
          kawiCount++;
        }
      }
    });

    message.channel.send(
      `Ilość wymarkowanych czołgów:\n gurolek: ${gurolekCount}\n kawi15: ${kawiCount}\n------------------\n Rożnica: ${gurolekCount - kawiCount}`,
    );
  }
});

// RANKING MOE, do zmiany
client.on("message", async (message) => {
  const nicks = new Map();
  const rankingMoe = new Map();
  const listToPrint = new Array();

  nicks.set("kawi15", 502647545);
  //nicks.set('razno', 501907348);
  nicks.set("DarthBaneDaBanane", 502267360);
  //nicks.set('Ex3l3nd', 502388571);
  //nicks.set('_KSYWA_', 506054567);
  //nicks.set('_HUZAR_', 500773367);
  nicks.set("bajera1", 503369229);
  nicks.set("STORM_MotywatorNegatywny", 502832598);
  //nicks.set('Coehoorn1906', 522758872);
  //nicks.set('Kochany_Coehoorn', 560712675);
  nicks.set("abrams1234", 518119298);
  nicks.set("DzikiiCzosnekXD", 503763087);
  nicks.set("Endevor19", 504600962);
  nicks.set("EndriuWygrasz_hero", 549251680);
  //nicks.set('FormixSGO', 552375171);
  //nicks.set('Grzeslek', 509819903);
  //nicks.set('inq_ognito', 530224665);
  //nicks.set('kubat12345', 501430647);
  //nicks.set('Mamoroth', 514013918);
  //nicks.set('Ayama', 507227655);
  //nicks.set('ayama_is_animal', 521379880);
  //nicks.set('Seylak', 537765208);
  nicks.set("thopson", 502621877);
  //nicks.set('thopson_jr', 553444172);
  //nicks.set('XYR0', 510276544);
  nicks.set("gurolek_is_animal", 503269826);

  if (message.content === `${prefix}ranking`) {
    await nicks.forEach(async (value, key) => {
      let json = await fetch(
        `https://api.worldoftanks.eu/wot/tanks/achievements/?application_id=${appId}&account_id=${value}&fields=achievements`,
      ).then((response) => response.json());
      let moeCount = 0;
      let jsonData = json.data[value];
      jsonData.forEach((arr) => {
        if (arr["achievements"]["marksOnGun"] == 3) {
          moeCount++;
        }
      });
      rankingMoe.set(key, moeCount);
      if (key == "gurolek_is_animal") {
        const sortedRanking = new Map(
          [...rankingMoe.entries()].sort((a, b) => b[1] - a[1]),
        );
        let i = 0;
        sortedRanking.forEach((value, key) => {
          listToPrint[i] = key;
          i++;
          listToPrint[i] = value;
          i++;
        });
        console.log(listToPrint);

        // inside a command, event listener, etc.
        const exampleEmbed = new MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Ranking MoE")
          .addFields(
            { name: `1. ${listToPrint[0]}`, value: listToPrint[1] },
            { name: `2. ${listToPrint[2]}`, value: listToPrint[3] },
            { name: `3. ${listToPrint[4]}`, value: listToPrint[5] },
            { name: `4. ${listToPrint[6]}`, value: listToPrint[7] },
            { name: `5. ${listToPrint[8]}`, value: listToPrint[9] },
            { name: `6. ${listToPrint[10]}`, value: listToPrint[11] },
            { name: `7. ${listToPrint[12]}`, value: listToPrint[13] },
            { name: `8. ${listToPrint[14]}`, value: listToPrint[15] },
            { name: `9. ${listToPrint[16]}`, value: listToPrint[17] },
            { name: `10. ${listToPrint[18]}`, value: listToPrint[19] },
          )
          .setTimestamp()
          .setFooter("Created by kawi15");

        message.channel.send(exampleEmbed);
      }
    });
  }
});

// COUBY, do zmiany
client.on("message", (msg) => {
  if (msg.content === `${prefix}coub`) {
    msg.channel.send(`tu będą linki do coubów`);
  }
});

// BINDY
client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "czosnek out") {
    msg.channel.send({
      files: ["./binds/czosnek wypierdalaj.mp3"],
    });
  } else if (msg.content.toLowerCase() === "formix krzaki") {
    msg.channel.send({
      files: ["./binds/formix krzaki.mp3"],
    });
  } else if (msg.content.toLowerCase() === "kawi noob") {
    msg.channel.send({
      files: ["./binds/kawi noob.mp3"],
    });
  }
});

client.login(mySecret);
