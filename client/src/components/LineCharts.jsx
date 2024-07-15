import { Tooltip, XAxis, Area, AreaChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import "../style/linecharts.css";

export default function LineCharts({ forecast, getForecastHour, userWeather }) {
  const weather = useLoaderData();

  const data = forecast.list
    ? forecast.list.map((forecasts) =>
        userWeather.length !== 0
          ? {
              name: `${getForecastHour(forecasts.dt_txt, userWeather.sys.country)}h`,
              speed: forecasts.wind.speed.toFixed(1),
              amt: 2400,
            }
          : {
              name: `${getForecastHour(forecasts.dt_txt, weather.sys.country)}h`,
              speed: forecasts.wind.speed.toFixed(1),
              amt: 2400,
            }
      )
    : [];

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
      map: PropTypes.func.isRequired,
      wind: PropTypes.shape({
        speed: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,

  userWeather: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  getForecastHour: PropTypes.func.isRequired,
};
