import {
  Tooltip,
  XAxis,
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import "../style/linecharts.css";
import { useLanguage } from "../context/LanguageContext";

export default function LineCharts({ forecast, getForecastHour, userWeather }) {
  const weather = useLoaderData();
  const { t } = useLanguage();

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

  const limitedData = data.slice(0, 7);

  useEffect(() => {
    if (forecast.list) {
      const tspans = document.querySelectorAll(
        ".recharts-cartesian-axis-tick tspan"
      );
      // Trouver l'index du tspan central
      const middleIndex = Math.floor(tspans.length / 2);
      // Déterminer la largeur du conteneur
      const containerWidth = document
        .querySelector(".recharts-cartesian-axis-tick")
        .getBoundingClientRect().width;
      // Calculer le décalage maximum (en pixels)
      const maxOffset = containerWidth / 2 - 24;

      tspans.forEach((tspan, index) => {
        const distanceFromMiddle = index - middleIndex;
        const dx = (maxOffset / middleIndex) * distanceFromMiddle;
        tspan.setAttribute("dx", dx);
      });
    }
  }, [forecast.list, limitedData]);

  return (
    <>
      <p className="speed-title">{t("WindSpeed")}</p>

      <div className="linechart-container">
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={limitedData} className="area-chart">
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#1C1A68" stopOpacity={1} />
                <stop offset="70%" stopColor="#D6DBE6" stopOpacity={1} />
                <stop offset="100%" stopColor="#E8EEF9" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              stroke="#0e0c5e"
              fontWeight={600}
              interval={0}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="speed"
              stroke="#0F0C5e"
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

LineCharts.propTypes = {
  forecast: PropTypes.shape(
    PropTypes.shape({
      list: PropTypes.arrayOf(
        PropTypes.shape({
          wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,

  userWeather: PropTypes.shape({
    length: PropTypes.number.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }),
  }).isRequired,
  getForecastHour: PropTypes.func.isRequired,
};
