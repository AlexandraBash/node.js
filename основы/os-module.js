 
 
 //    OS (operation sysrems) дает понять на какой операционной системе мы работаем 
 
 const os = require('os');

 console.log(os.platform()); // платформа - darwin - mac os
 console.log(os.arch());// архитектура
//  console.log(os.cpus());// информация в формате массива обьектов
 console.log(os.freemem());//своодная память
console.log(os.totalmem());///общий обьем памяти
console.log(os.homedir()); //корневая директории
 console.log(os.uptime()); //сколько система работает в милисекундах
