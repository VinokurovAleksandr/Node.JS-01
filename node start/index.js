// import users from './user.js'
// // const users = users;
// console.log(users);


// const {admins} = require("./user.mjs");
// console.log(admins);


// const  {getCurrentMonth} = require('./date');
// const currentMonth = getCurrentMonth();
// console.log(currentMonth);

// const currentMonth = require('./date/index.mjs').getCurrentMonth();
// console.log(currentMonth);

const fs = require("fs/promises");

const  contactsPath  = async({filePath, action, data}) => {
    switch(action) {
        case "read":
            const text = await fs.readFile(filePath, 'utf-8');
            console.log(text);
            break;
            
    }
}
contactsPath({filePath: './db/file.txt', action: "read"})