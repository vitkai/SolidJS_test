import { Setter, JSX } from "solid-js";
import { Book } from "../App";
export interface AddBookProps {
  setBooks: Setter<Book[]>;
}
export function AddBook(props: AddBookProps) {
  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    event.preventDefault();
    props.setBooks([]);
  };
  return (
    <form>
      <div>
        <label for="title">Book name</label>
        <input id="title" />
      </div>
      <div>
        <label for="author">Author</label>
        <input id="author" />
      </div>
      <button type="submit" onClick={addBook}>
        Add book
      </button>
    </form>
  );
}