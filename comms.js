const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //
function Hackforgehax(robot, mess , args) {
    mess.channel.send('||https://drive.google.com/file/d/1GoSkRqPWTrKDlFvE-fw28dj3gGSheDJw/view?usp=sharing||')
}
function Hackwwe(robot, mess , args) {
        mess.channel.send('||https://drive.google.com/file/d/1Q2NsxrDQXuOw35ETU9zZ6B_Pi021cqYu/view?usp=sharing||')
}     
function HackKami(robot, mess , args) {
    mess.channel.send('||https://drive.google.com/file/d/1y5rw1Ai7V9cSEeZgelt_T3VMm9qmUwl8/view?usp=sharing||')
}     
function HackInertia(robot, mess , args) {
    mess.channel.send('||https://drive.google.com/file/d/1bzk3stB1z-4tLMhhpqDfPipDOgSSZlAS/view?usp=sharing||')
}    
function HackPyro(robot, mess , args) {
    mess.channel.send('Это кряк, скачивайте на свой страх и риск.')
    mess.channel.send('||https://drive.google.com/file/d/1mhcMLi4c2pCUYXJGFkUKFcTdhBBCDlV-/view?usp=sharing||')
}   
function HackImpact(robot, mess , args) {
    mess.channel.send('Это кряк, скачивайте на свой страх и риск.')
    mess.channel.send('||https://drive.google.com/file/d/1woLuTgkMlTe0PKCciVjgSip5I-gVim7M/view?usp=sharing||')
}   
    function cheats(robot, mess , args) {
    mess.channel.send('--==Список читов N.W.==--')
    mess.channel.send('- 1.12.2')
    mess.channel.send('forgehax - <Hackforgehax')
    mess.channel.send('WWE - <HackWWE')
    mess.channel.send('Kami Blue - <HackKami')
    mess.channel.send('Pyro Client (crack) - <HackPyro')
    mess.channel.send('Impact - <HackImpact')
    mess.channel.send('- 1.16.4')
    mess.channel.send('Inertia Client - <HackInertia')
}    
    function скажи(robot, mess , args) {
        if(!mess.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send("У  вас нет прав"); /* Если у исполнителя команды нету привилегии MANGAGE_MESSAGES, он не сможет её использовать */
    
        let robotmessage = args = mess.content.split(' '); // Пробелы между словами 
        args.shift();
        args = args.join(' ');
    
        mess.delete().catch(); // Удаление сообщения пользователя после отправки 
    
        mess.channel.send(robotmessage).then(mess.channel.send(mess.author)) /*             Отправление в чат сообщения бота */
    }
	function монета(robot, mess , args) {
	    mess.channel.send('Монета подбрасывается...')

        var random = Math.floor(Math.random() * 4); // Объявление переменной random - она вычисляет случайное число от 1 до 3

        if (random == 1) { // Если вычислено число 1, то выпадает орёл.
            mess.channel.send(':full_moon: Орёл!')
        } else if (random == 2) { // Если вычислено число 2, то выпадает решка.
            mess.channel.send(':new_moon: Решка!')
        } else if (random == 3) { // Если вычислено число 3, то монета падает         ребром.
            mess.channel.send(':last_quarter_moon: Монета упала ребром!')
    }
	}
	function очисти(robot, mess , args) {
		const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
        const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
        if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
        if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 
        
        if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
        if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1
        
        async function delete_messages() { // Объявление асинхронной функции

        await mess.channel.messages.fetch({ limit: amount }).then(messages => {
            mess.channel.bulkDelete(messages)
            mess.channel.send(`Удалено ${amount} сообщений!`)
        })};
	delete_messages(); // Вызов асинхронной функции }
}

 // Список комманд //
   
var comms_list = [
    {name: "скажи", out: скажи, about: "Повторялка"}
	,{name: "монета", out: монета, about: "орёл и решка"}
    ,{name: "очисти", out: очисти, about: "clear"}
    ,{name: "cheats", out: cheats, about: "cheats"}
    ,{name: "Hackforgehax", out: Hackforgehax, about: "cheats"}
    ,{name: "Hackwwe", out: Hackwwe, about: "cheats"}
    ,{name: "HackKami", out: HackKami, about: "cheats"}
    ,{name: "HackInertia", out: HackInertia, about: "cheats"}
    ,{name: "HackPyro", out: HackPyro, about: "cheats"}
    ,{name: "HackImpact", out: HackImpact, about: "cheats"}
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 



module.exports.comms = comms_list;