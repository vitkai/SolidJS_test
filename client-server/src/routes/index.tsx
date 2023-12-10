import { Title } from "solid-start";
// import Counter from "~/components/Counter";
import { Bookshelf } from "~/components/BookShelf"

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      {/* <Counter /> */}
      <Bookshelf name="Solid"/>
    </main>
  );
}
