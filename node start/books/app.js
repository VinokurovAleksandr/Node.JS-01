const books = require('./books');




const invokeAction = async({action, id, name, email, phone}) => {
    switch (action) {
        // // search all books
        case 'getAll':
            const allBooks = await books.getAll();
            console.log(allBooks[0]);
            break;
            // search one book
            case "getById": 
                const oneBook = await books.getById(id);
                console.log(oneBook);
                break;
            case "add":
                const addNewBook = await books.add(name, email, phone);
                console.log(addNewBook);
                break;
            case 'updateByID':
                const updateBook = await books.updateByID(id,name, email, phone);
                console.log(updateBook);
                break;
            case 'removeByID':
                const removeBook = await books.removeBook(id);
                console.log(removeBook);
                break;
    }
};

// // search all books
// invokeAction({action: 'getAll'})
 // search one book
// invokeAction({action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' })
// invokeAction({action: 'add', name:"Mark", email: "www@mail.ua", phone: '+38098888888' });
// invokeAction({action: 'updateByID',
// id: 'xGv1NVkbad5iY5qoB_OM2', 
// name:"Markk", 
// email: "www@gmail.ua", 
// phone: '+380955555555'
//  });
invokeAction({action: 'removeByID',
id: 'xGv1NVkbad5iY5qoB_OM2', 
name:"Markk", 
email: "www@gmail.ua", 
phone: '+380955555555'
 });
