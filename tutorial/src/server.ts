import server$ from 'solid-start/server'
import { Book } from './types';

const bookList: Book[] = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
  ];

export async function fetchBooks() {
    console.log(`fetchBooks call returns ${bookList.length}`)
    return Promise.resolve(bookList);
}

export function addBook(newBook: Book) {
    console.log("addBook with", newBook)
    bookList.push(newBook)
    // return newBook
}