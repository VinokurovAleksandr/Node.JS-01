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

const fs = require("fs/promises");

const  fileOperation = async({filePath, action,data}) => {
    switch (action) {
        case 'read':
            const text = await fs.readFile(filePath, 'utf-8')
            console.log(text);
            
            // const data = await fs.readFile(filePath);
            // const text = data.toString()
            // console.log(text);
            
            break;
            case 'add':
               await fs.appendFile(filePath,data);
                break;
                case 'replace':
                   const result =  await fs.writeFile(filePath,data);
                   console.log(result);
                   
                    break;
    }
}

// fileOperation({filePath: "./work-with-files/files/file.txt", action: "add", data: '\n Pyanashok'})
// fileOperation({filePath: "./work-with-files/files/file.txt", action: "replace", data: '\n dfdfdfd'})
fileOperation({filePath: "./work-with-files/files/file2.txt", action: "replace", data: '\n dfdfdfd'})