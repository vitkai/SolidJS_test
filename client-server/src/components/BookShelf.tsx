import { Component, createSignal, Show, createResource, createEffect } from "solid-js";
import { BookList } from "~/components/BookList";
import { AddBook } from "~/components/AddBook";
import { Book } from "~/types";
import { addBook, fetchBooks } from "~/server";

interface BookshelfProps {
    name: string;
  }
  
export const Bookshelf: Component<BookshelfProps> = props => {
    const [showForm, setShowForm] = createSignal(false);
    const toggleForm = () => setShowForm(!showForm());
    const [data, {refetch: refetchBooks}] = createResource<Book[]>(fetchBooks);
    // (window as any).refetchBooks = refetchBooks
  
    createEffect(()=>{
      console.log(`data length: ${data()?.length}`)
    })
    
    const addNewBook = (book: Book) => {
      addBook(book)
      refetchBooks()
      console.log("addNewBook call")
    }
  
    return (
      <div>
        <h1>{props.name}'s Bookshelf</h1>
        <BookList books={data} />
        <Show
          when={showForm()}
          fallback={<button onClick={toggleForm}>Add a book</button>}
        >
          <AddBook addNewBook={addNewBook} />
          <button onClick={toggleForm}>Finished adding books</button>
        </Show>
      </div>
    );
  }
  
