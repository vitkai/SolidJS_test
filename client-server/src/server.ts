import server$ from 'solid-start/server'
import { Book } from './types';

const bookList: Book[] = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
  ];

export const fetchBooks = server$(async () => {
    console.log(`fetchBooks call returns ${bookList.length}`);
    return Promise.resolve([...bookList]);
})

export const addBook = server$((newBook: Book) => {
    console.log("addBook with", newBook);
    bookList.push(newBook);
})