import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import "../style/linechart.css";

export default function LineCharts({ forecast }) {
  console.info(forecast);

  const data = [
    {
      name:
        forecast.length !== 0 && `${forecast.list[0].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[0].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[0].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[1].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[1].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[1].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[2].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[2].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[2].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[3].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[3].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[3].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[4].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[4].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[4].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[5].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[5].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[5].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[6].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[6].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[6].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[7].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[7].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[7].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[8].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[8].wind.speed.toFixed(1)}`,
      gust: forecast.length !== 0 && `${forecast.list[8].wind.gust.toFixed(1)}`,
      amt: 2400,
    },
  ];
  return (
    <>
      <p className="speed-title">Wind Speed: mph</p>
      <div className="linechart-container">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 0, right: 10, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="gust" stroke="red" />
          <Line type="monotone" dataKey="speed" stroke="#0e0c5e" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </>
  );
}
