import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Dateinput from "~/components/Dateinput";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <Dateinput />
    </main>
  );
}
