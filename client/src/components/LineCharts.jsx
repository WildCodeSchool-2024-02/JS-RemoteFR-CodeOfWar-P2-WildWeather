import { LineChart, Line, Tooltip, XAxis } from "recharts";
import "../style/linechart.css";

export default function LineCharts({ forecast }) {
  console.info(forecast);
  // const data = [
  //   { name: "hh:hh", ml: 45, tem: 52, amt: 2400 },
  //   { name: "hh:hh", ml: 40, tem: 50, amt: 2400 },
  //   { name: "hh:hh", ml: 48, tem: 42, amt: 2400 },
  //   { name: "hh:hh", ml: 50, tem: 53, amt: 2400 },
  //   { name: "hh:hh", ml: 66, tem: 88, amt: 2400 },
  //   { name: "hh:hh", ml: 78, tem: 93, amt: 2400 },
  //   { name: "hh:hh", ml: 89, tem: 90, amt: 2400 },
  //   { name: "hh:hh", ml: 56, tem: 65, amt: 2400 },
  //   { name: "hh:hh", ml: 64, tem: 42, amt: 2400 },
  //   { name: "hh:hh", ml: 49, tem: 40, amt: 2400 },
  //   { name: "hh:hh", ml: 50, tem: 43, amt: 2400 },
  //   { name: "hh:hh", ml: 52, tem: 60, amt: 2400 },
  // ];

  const data = [
    {
      name: forecast.list && `${forecast.list[0].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[0].wind.speed.toFixed(1)}`,
      min: forecast.list && `${forecast.list[0].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[1].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[1].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[1].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[2].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[2].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[2].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[3].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[3].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[3].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[4].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[4].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[4].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[5].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[5].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[5].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[6].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[6].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[6].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[7].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[7].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[7].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name: forecast.list && `${forecast.list[8].dt_txt.substring(11, 16)}`,
      gust: forecast.list && `${forecast.list[8].wind.speed.toFixed(1)}`,
      speed: forecast.list && `${forecast.list[8].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
  ];
  return (
    <div className="linechart-container">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="gust" stroke="red" />
        <Line type="monotone" dataKey="speed" stroke="blue" />

        <XAxis dataKey="name" />

        <Tooltip />
      </LineChart>
    </div>
  );
}
