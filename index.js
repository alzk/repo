const TelegramBot = require('node-telegram-bot-api');
 
 // API Token Telegram
 const token = '635268753:AAEwe44Q6e0VYxlogS7W9VQZT5DG0PlbtE0';

 // Creamos un bot que usa 'polling'para obtener actualizaciones
const bot = new TelegramBot(token, {polling: true});
 const request = require('request');
 
// Mensaje de bienvenida "/start" reconoce el nombre del usuario que inicia el Bot
bot.on('message', (msg) => {
 var start = "/start";
 if (msg.text.toString().toLowerCase().indexOf(start) === 0) {
     bot.sendMessage(msg.chat.id, "Hola " + msg.from.username + "\nSoy un bot creado en nodejs, ¿Que quieres hacer primero?\n\n /ListaApks\n/ListaDePeliculas");
 }
});

bot.on('message', (msg) => {
 var estado = "Me encuentro bien";
 if (msg.text.toString().toLowerCase().indexOf(estado) === 0) {
     bot.sendMessage(msg.chat.id, "Me alegro! \nes bueno saber eso :)");
 }
 });
bot.onText(/picsart/, (msg) => {
bot.sendDocument(msg.chat.id,"https://t.me/PiracyPoNy/101",{caption : "Mod: Caracteristicas premium desbloqueadas\n@PiracyPoNy"} );
});

bot.on('message', (msg) => {
 var list = "/listaapks";
 if (msg.text.toString().toLowerCase().indexOf(list) === 0) {
     bot.sendMessage(msg.chat.id, "Esta es nuestra lista más actual de Apks " + msg.from.username + "\n\n/picsart");
 }
});