import React, { useState, useEffect } from "react";
import Logo from "../../public/images/logo.png";
import "../../public/index.css";
import "../../public/tailwind.css?url";
import { FaMinus, FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [weather, setWeather] = useState('');
  const [forecastDate, setForecastDate] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const cityCode = '070010';
        const url = 'https://weather.tsukumijima.net/api/forecast';
        const response = await axios.get(url, { params: { city: cityCode } });
        const data = response.data;

        if (data.forecasts && data.forecasts.length > 0) {
          let weatherInfo = data.forecasts[0].telop || "";
          if (weatherInfo.includes('のち')) {
            weatherInfo = weatherInfo.split('のち')[1].trim();
          } else if (weatherInfo.includes('時々')) {
            weatherInfo = weatherInfo.split('時々')[0].trim();
          }
          setWeather(weatherInfo);
          setForecastDate(data.forecasts[0].date);
        } else {
          setWeather("天気情報が取得できませんでした");
        }
      } catch (error) {
        console.error("APIエラー:", error);
        setWeather("天気情報の取得に失敗しました");
      }
    };

    fetchWeather();
  }, []);

  const renderWeatherIcon = () => {
    const iconStyle = { color: 'pink' };
    switch (true) {
      case weather.includes("晴"):
        return <FaSun size={30} style={iconStyle} />;
      case weather.includes("曇"):
        return <FaCloud size={30} style={iconStyle} />;
      case weather.includes("雨"):
        return <FaCloudRain size={30} style={iconStyle} />;
      case weather.includes("雪"):
        return <FaSnowflake size={30} style={iconStyle} />;
      default:
        return <span className="text-pink-400 text-sm">{weather}</span>;
    }
  };

  return (
    <header className="py-10 px-4 md:px-8 w-full relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* ロゴ・天気アイコン */}
        <div className="absolute left-4 top-4 flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto md:h-20" />
          <p className="text-Light_brown text-xl md:text-4xl font-HANNARI">YURURI</p>
          {renderWeatherIcon()}
        </div>

        {/* ハンバーガー（モバイル） */}
        <button
          className="absolute top-4 right-4 md:hidden text-Light_blue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaMinus size={28} /> : <CgMenuCake size={32} />}
        </button>

        {/* ナビゲーション（PC） */}
        <nav className="hidden md:flex mt-4 md:mt-0 justify-end w-full">
          <ul className="flex space-x-8 text-2xl text-Light_blue">
            {["/", "/about", "/contact"].map((path, i) => (
              <li key={path}>
                <Link
                  to={path}
                  className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:border-b-2 hover:border-[#ff1493] active:translate-y-1 transition-all duration-200"
                >
                  {["Home", "About", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ナビゲーション（モバイル） */}
      {menuOpen && (
        <nav className="md:hidden mt-10 space-y-2 text-2xl text-[#f5c4c8] flex flex-col items-start">
          <Link to="/" className="btn w-full">Home</Link>
          <Link to="/about" className="btn w-full">About</Link>
          <Link to="/contact" className="btn w-full">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default PortfolioHeader;
