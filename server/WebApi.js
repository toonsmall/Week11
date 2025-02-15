import express from 'express';
import core from 'cors';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import serviceAccount from './firebase-config.json.json' with { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express()
const port = 3000

//Fetch data
//http://localhost:3000/getBooks
app.get('/getBooks', (req, res) => {
res.set('Content-type', 'application/json');
fetchBook().then((jsonData) => {
    res.send(jsonData);
}).catch((error) => {
    res.send(error);
});
});

async function fetchBook() {
    const result =[];
    const booksRef = db.collection('Books');
    const booksObj = await booksRef.get();
    booksObj.forEach((doc) => {
        result.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return JSON.stringify(result);
}

//Add book
//http://localhost:3000/addBook
app.get('/addbook', (req, res) => {
addBook();
res.end('Added new book');
});

async function addBook (){
    const newBookRef = db.collection('Book').doc();
    const bookRef = db.collection('Books').doc(newBookRef.id);
    let bookObj = {
        bookId: newBookRef.id,
        bookTitle: 'Test Title 3',
        bookDesc: 'Test Desc 3'
    };
    await bookRef.set(bookObj);
    console.log('Book added...');
}

// object array
const myOrder = [

];

//GET,POST,PUT,DELETE
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//http://localhost:3000/toDoLists/u100/ORD100
app.get('/toDoLists/:userId/orderID', (req, res) => {
    let myData = "<h1>My Profile</h1>";
    myData+= "<strong>User ID:</strong>"+req.params.userId+"<br/>";
    myData+= "<strong>Order ID:</strong>"+req.params.orderId+"<br/>";
    res.set('Content-type','text/html');
    res.send(myData);
})

app.post('/', (req, res) => {
    res.send('Hello World in POST method!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})