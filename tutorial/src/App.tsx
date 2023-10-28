import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
interface BookshelfProps {
  name: string;
}
function Bookshelf(props: BookshelfProps) {
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList />
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