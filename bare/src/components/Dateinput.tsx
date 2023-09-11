import { createSignal } from "solid-js";

const [date, setDate] = createSignal("");
const [result, setResult] = createSignal<string>("");

const processDate = () => {
  const inputDate = date();
  // Perform your calculations on the input date and update the result
  // For this example, we'll just display the input date as is.
  setResult(`You entered: ${inputDate}`);
};

export default function Dateinput() {
  return (
    <div>
      <label>Date:</label>
      <input
        type="text"
        value={date()}
        onInput={(e) => setDate(e.target.value)}
      />
      <button onClick={processDate }>Calculate</button>
      <div>
        <p>Result: {result()}</p>
      </div>
    </div>
  );
}
