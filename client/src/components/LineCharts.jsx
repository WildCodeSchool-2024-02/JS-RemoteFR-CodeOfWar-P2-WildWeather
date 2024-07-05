import { Tooltip, XAxis, Area, AreaChart } from "recharts";
import PropTypes from "prop-types";
import "../style/linechart.css";

export default function LineCharts({ forecast }) {
  console.info(forecast);

  const data = [
    {
      name:
        forecast.length !== 0 && `${forecast.list[0].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[0].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[1].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[1].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[2].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[2].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[3].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[3].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[4].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[4].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[5].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[5].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[6].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[6].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[7].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[7].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 && `${forecast.list[8].dt_txt.substring(11, 16)}`,
      speed:
        forecast.length !== 0 && `${forecast.list[8].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
  ];
  return (
    <>
      <p className="speed-title">Wind Speed: mph</p>
      <div className="linechart-container">
        <AreaChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 0, right: 10, bottom: 5, left: 10 }}
        >
          <XAxis dataKey="name" stroke="#0e0c5e" fontWeight={600} />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="speed"
            stroke="#0e0c5e"
            fill="#d5e8ff"
          />
        </AreaChart>
      </div>
    </>
  );
}
LineCharts.propTypes = {
  forecast: PropTypes.shape({
    length: PropTypes.number.isRequired,
    list: PropTypes.shape({
      wind: PropTypes.shape({
        speed: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
