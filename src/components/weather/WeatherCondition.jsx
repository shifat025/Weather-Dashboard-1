import Tempmax from '../../assets/icons/temp-max.svg'
import Tempmin from '../../assets/icons/temp-min.svg'
import humidityIcon from '../../assets/icons/humidity.svg'
import cloud from '../../assets/icons/cloud.svg'
import windIcon from '../../assets/icons/wind.svg'
import { useContext } from "react";
import { WeatherContext } from "../../context";
// import Tempmax from '../../assets/icons/temp-max.svg'


export default function WeatherCondition() {
  const { weatherData} = useContext(WeatherContext);
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate

  } = weatherData
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The Climate is <ul>{climate}</ul>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={Tempmax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={Tempmin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{ cloudPercentage}%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind} km/h</p>
            <img src={windIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
