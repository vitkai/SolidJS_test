import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
function Bookshelf() {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  )
}
function App() {
  return (
    <Bookshelf/>
  );
}
export default App;