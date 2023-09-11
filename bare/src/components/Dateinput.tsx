import { Accessor, Component, Setter, createSignal } from "solid-js";

interface DateInputProps {
  date: Accessor<string>,
  setDate: Setter<string>
}

export const DateInput: Component<DateInputProps> = (props) => {
  return (
    <div>
      <label>Date:</label>
      <input
        type="text"
        value={props.date()}
        onInput={(e) => props.setDate(e.target.value)}
      />
    </div>
  );
}
