// @refresh reload
import { createSignal } from "solid-js";
import "./app.css";

import { FileList } from "./components/FileList";

export default function App() {
  const [count, setCount] = createSignal(0);
  return (
    <main>
      <h1>File list test</h1>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <FileList />
      {/* <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p> */}
    </main>
  );
}
