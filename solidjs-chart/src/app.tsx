import { createSignal } from "solid-js";
import "./app.css";

import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'solid-chartjs'

const MyChart = () => {
  /**
   * You must register optional elements before using the chart,
   * otherwise you will have the most primitive UI
   */
  onMount(() => {
      Chart.register(Title, Tooltip, Legend, Colors)
  })

  const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
          {
              label: 'Sales',
              data: [50, 60, 70, 80, 90],
          },
          {
              label: 'Sales02',
              data: [10, 15, 13, 18, 29],
          },
          {
            label: 'Vertical',
            data: [, , 0, , ],
        },
      ],
  }
  
  const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
            display: true,
            text: 'Solid Chart.js implementation',
        }
      },
  }

  return (
      <div>
          {/* <Doughnut data={chartData} options={chartOptions} width={500} height={500} /> */}
          <Line data={chartData} options={chartOptions}/>
          {/* <Line data={chartData2} options={chartOptions} width={100} height={100} /> */}
      </div>
  )
}

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <h1>Hello world!</h1>
      <button class="increment" onClick={() => setCount(count() + 1)} type="button">
        Clicks: {count()}
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <MyChart />
    </main>
  );
}
