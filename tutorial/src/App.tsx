import { Component, createSignal, Show, Setter, createResource, createEffect } from "solid-js";
import { BookList } from "./components/BookList";
import { AddBook2 } from "./components/AddBook2";
import { addBook, fetchBooks } from "./server";
import { Book } from "./types";

interface BookshelfProps {
  name: string;
}

const Bookshelf: Component<BookshelfProps> = props => {
  // const [books, setBooksArray] = createSignal([] as Book[]);
  const [showForm, setShowForm] = createSignal(false);
  const toggleForm = () => setShowForm(!showForm());
  const [data, {refetch: refetchBooks}] = createResource<Book[]>(fetchBooks);
  (window as any).refetchBooks = refetchBooks

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
        <AddBook2 addNewBook={addNewBook} />
        <button onClick={toggleForm}>Finished adding books</button>
      </Show>
    </div>
  );
}

function App() {
  return (
    <Bookshelf name="Solid"/>
  );
}

export default App;