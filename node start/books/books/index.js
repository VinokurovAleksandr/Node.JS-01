/* 
// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//    1. // ...твой код. Возвращает массив контактов.
//   }
  
//   function getContactById(contactId) {
//  2.   // ...твой код. Возвращает объект контакта с таким id. Возвращает null если объект с таким id не найден.
//   }
  
//   function removeContact(contactId) {
//    3. // ...твой код. Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
//   }
  
//   function addContact(name, email, phone) {
//    4. // ...твой код. Возвращает объект добавленного контакта. 
// Возвращает null если объект с таким id не найден.
//   }
const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require('nanoid')








const booksPath = path.join(__dirname, "books.json")


 // search all books
const getAll = async() => {
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}
// search one book

const getById = async(id) => {
    const books = await getAll();
    const res = books.find(item => item.id === id);
    if(!res){
        return null
    }
    return res;
}

// add Book
const add = async(name, email, phone) => {
    const  books = await getAll();
    const newBook = {
        name, 
        email, 
        phone,
        id: nanoid(),
    };
    books.push(newBook);
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
    return newBook;
};

const updateByID = async(id, name, email, phone) => {
    const  books = await getAll();
    const idx = books.findIndex(item => item.id === id);
        if (idx === -1) {
            return null;
        }
        books[idx] = {id, name, email, phone};
        await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
        return books[idx]
}

const removeBook = async(id) => {
    const  books = await getAll();
    const idx = books.findIndex(i => i.id !== id);
    if(idx === -1) {
        return null;
    };
    const [removeBook] = books.splice(idx, 1);
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
    return removeBook;

}

module.exports = {
    getAll,
    getById,
    add,
    updateByID,
    removeBook
}
// console.log('hello');
