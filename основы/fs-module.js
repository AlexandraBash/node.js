
/// FS (File System) модуль для работы с файлами и папками

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error(err)
//     console.log('Папка была создана');
// })// создали папку notes в корне

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
// 'Hello World', 
//     (err) => {
//     if (err) throw err
//     console.log('Файл был создан');
//     fs.appendFile(
//         path.join(__dirname, 'notes', 'mynotes.txt'),
//         ' From append File',
//         err => {
//             if (err) throw err
//             console.log('Файл был изменен');//добавили текст
//             fs.readFile(
//                 path.join(__dirname, 'notes', 'mynotes.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err
//                     console.log(data);
//                 }
//             )// <Buffer данный скрипт работает асинхронно
//         }
//     )
// })

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err
        console.log('Файл переименован');
    }
)// переименовали измененный файл