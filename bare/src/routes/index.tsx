import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { DateInput } from "~/components/Dateinput";
import { createSignal } from "solid-js";

const [date, setDate] = createSignal("");
const [result, setResult] = createSignal<string>("");

const processDate = () => {
  const inputDate = date();
  // Perform your calculations on the input date and update the result
  // For this example, we'll just display the input date as is.
  setResult(`You entered: ${inputDate}`);
};

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <DateInput date={date} setDate={setDate} />
      <button onClick={processDate }>Calculate</button>
      <div>
        <p>Result: {result()}</p>
      </div>
    </main>
  );
}
