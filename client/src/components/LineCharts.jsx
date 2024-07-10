import { Tooltip, XAxis, Area, AreaChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "../style/linecharts.css";

export default function LineCharts({ forecast }) {
  console.info(forecast);
  const data = [
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[0].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[0].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[1].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[1].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[2].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[2].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[3].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[3].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[4].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[4].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[5].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[5].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[6].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[6].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[7].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[7].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
    {
      name:
        forecast.length !== 0 &&
        `${forecast.list[8].dt_txt.substring(11, 13)}h`,
      speed:
        forecast.length !== 0 && `${forecast.list[8].wind.speed.toFixed(1)}`,
      amt: 2400,
    },
  ];

  return (
    <>
      <p className="speed-title">Wind Speed: mph</p>
      <div className="linechart-container">
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart
            data={data}
            // margin={{ top: 0, right: 10, bottom: 5, left: 10 }}
            className="area-chart"
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
        </ResponsiveContainer>
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
