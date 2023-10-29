import { createSignal } from "solid-js";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";

export type Book = {
  title: string;
  author: string;
};
const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];
interface BookshelfProps {
  name: string;
}
function Bookshelf(props: BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks);
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook />
    </div>
  );
}
function App() {
  return (
    <Bookshelf name="solid"/>
  );
}
export default App;