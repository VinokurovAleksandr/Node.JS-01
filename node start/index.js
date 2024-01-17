// import users from './user.js'
// // const users = users;
// console.log(users);


// const {admins} = require("./user");
// console.log(admins);

// import getCurrentMonth from './date/index.js'
// // const  {getCurrentMonth} = require('./date');
// // const currentMonth = getCurrentMonth();
// console.log(getCurrentMonth);

// const currentMonth = require('./date/index.mjs').getCurrentMonth();
// console.log(currentMonth);

// const fs = require("fs/promises");


// import moduleName from './work-with-files/files/file.txt'

// const  contactsPath  = async({filePath, action, data}) => {
//     switch(action) {
//         case "read":
//             const text = await fs.readFile(filePath, 'utf-8');
//             console.log(text);
//             break;
            
//     }
// }
// contactsPath({filePath: './db/file.txt', action: "read"})


// const fs = require("fs/promises");

// fs.readFile("./files/file.txt", )
//     .then(data => console.log(data))
//     .catch(error => console.log(error)
//     )

// const fs = require("fs/promises");

// const  fileOperation = async({filePath, action,data}) => {
//     switch (action) {
//         case 'read':
//             const text = await fs.readFile(filePath, 'utf-8')
//             console.log(text);
            
//             // const data = await fs.readFile(filePath);
//             // const text = data.toString()
//             // console.log(text);
            
//             break;
//             case 'add':
//                await fs.appendFile(filePath,data);
//                 break;
//                 case 'replace':
//                    const result =  await fs.writeFile(filePath,data);
//                    console.log(result);
                   
//                     break;
//     }
// }

// fileOperation({filePath: "./work-with-files/files/file.txt", action: "add", data: '\n Pyanashok'})
// fileOperation({filePath: "./work-with-files/files/file.txt", action: "replace", data: '\n dfdfdfd'})
// fileOperation({filePath: "./work-with-files/files/file2.txt", action: "replace", data: '\n dfdfdfd'})

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on('line', cmd => {
//     console.log(`You just type: ${cmd}`); 
// });
// rl.question('What is you name?', answer => {
//     // console.log(`Nise to meet you ${answer}`);
// }) 

const readline = require('readline');
const fs = require('fs').promises;
const { program } = require('commander');
require('colors');
program.option(
  '-f, --file [type]',
  'file for saving game results',
  'results.txt',
);
program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = value => {
  if (isNaN(value)) {
    console.log('Введите число!'.red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log('Число должно быть в диапазоне 1 до 10'.red);
    return false;
  }
  return true;
};

const log = async data => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Удалось сохранить результат в файл ${logFile}`.green);
  } catch (err) {
    console.log(`Не удалось сохранить файл ${logFile}`.red);
  }
};

const game = () => {
  rl.question(
    'Введите число от 1 до 10, чтобы угадать задуманное: '.yellow,
    value => {
      let a = +value;
      if (!isValid(a)) {
        game();
        return;
      }
      count += 1;
      if (a === mind) {
        console.log('Поздравляю Вы угадали число за %d шага(ов)'.green, count);
        log(
          `${new Date().toLocaleDateString()}: Поздравляю Вы угадали число за ${count} шага(ов)`,
        ).finally(() => rl.close());
        return;
      }
      console.log('Вы не угадали еще попытка'.red);
      game();
    },
  );
};

game();