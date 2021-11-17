
//      модуль PATH ,базовый модуль для работы с путями в node.js
const path = require('path');

console.log(__filename);// абсолютный путь до файла
console.log(path.basename(__filename));// забирает название фала из абсолютного пути
console.log(path.dirname(__filename));//определить в какой папке находится данный файл
console.log(path.extname(__filename));// расширение файла
console.log(path.parse(__filename));// выводит обьект в консоль

console.log(path.join(__dirname, 'test', 'second.html'));//путь
console.log(path.resolve(__dirname), './test', '/second.html');// абсолютный путь

