import { createSignal, Setter, JSX, createResource, For, Show } from "solid-js";
import { searchBooks } from "./searchBooks";
import { Book } from "../types";

export interface AddBookProps {
  addNewBook: (book: Book) => void
}

export function AddBook2(props: AddBookProps) {
  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");
  const [data] = createResource<Book[], string>(query, searchBooks);
  return (
    <>
      <form>
        <div>
          <label for="title">Search books</label>
          <input
            id="title"
            value={input()}
            onInput={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setQuery(input());
          }}
        >
          Search
        </button>
      </form>
      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={data()}>
            {(book) => (
              <li>
                {book.title} by {book.author}{" "}
                <button
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(e) => {
                    e.preventDefault();
                    props.addNewBook(book)
                  }}
                >
                  Add
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  );
}