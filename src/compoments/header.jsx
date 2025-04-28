import React, { useState, useEffect } from "react";
import Logo from "../../public/images/logo.png"; // ロゴ画像のインポート
import "../../public/index.css";
import "../../public/tailwind.css?url";
import { FaMinus, FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";
import { Link } from "react-router-dom"; // Linkをインポート
import axios from "axios"; // axiosをインポート

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [weather, setWeather] = useState('');
  const [forecastDate, setForecastDate] = useState('');

  useEffect(() => {
    // 会津若松の都市コード
    const cityCode = '070010';  
    const url = 'https://weather.tsukumijima.net/api/forecast';
    
    axios.get(url, { params: { city: cityCode } })
      .then(response => {
        const data = response.data;
        console.log(data); // レスポンス内容を確認

        // 天気情報が正常に含まれているか確認
        if (data.forecasts && data.forecasts.length > 0) {
          const forecast = data.forecasts[0];
          let weatherInfo = forecast.telop;

          // 「のち」を含む場合、後半部分の天気（「雨」など）を優先する
          if (weatherInfo.includes('のち')) {
            const parts = weatherInfo.split('のち'); // 「のち」で分割
            weatherInfo = parts[1].trim(); // 後半部分を使用
          }

          if (weatherInfo) {
            setWeather(weatherInfo); // 天気情報をセット
            setForecastDate(forecast.date); // 予報日をセット
          } else {
            setWeather("天気情報がありません"); // telopが存在しない場合の処理
          }
        } else {
          setWeather("天気情報が取得できませんでした。"); // forecastsが空の場合
        }
      })
      .catch(error => {
        console.error('APIエラー:', error);
        setWeather("天気情報の取得に失敗しました");
      });
  }, []);

  // 天気に応じたアイコンを返す関数
  const renderWeatherIcon = () => {
    const iconStyle = { color: 'pink' }; // アイコンを白色に設定

    switch (weather) {
      case '晴れ':
        return <FaSun size={30} style={iconStyle} />;
      case '曇り':
        return <FaCloud size={30} style={iconStyle} />;
      case '雨':
        return <FaCloudRain size={30} style={iconStyle} />;
      case '雪':
        return <FaSnowflake size={30} style={iconStyle} />;
      default:
        return <span style={iconStyle}>{weather}</span>; // デフォルトの表示（エラーメッセージも表示される）
    }
  };

  return (
    <header className="py-10 px-4 md:px-8 w-full relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* ロゴと天気アイコン */}
        <div className="absolute left-4 top-4 flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto md:h-20" />
          <p className="text-Light_brown text-1xl md:text-4xl font-HANNARI">
            YURURI
          </p>
          {/* 天気アイコンの表示 */}
          {renderWeatherIcon()}
        </div>

        {/* ハンバーガーボタン（モバイルのみ表示） */}
        <button
          className="absolute top-4 right-4 md:hidden text-Light_blue"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <div className="flex items-center space-x-2">
              <FaMinus size={28} />
            </div>
          ) : (
            <CgMenuCake size={32} />
          )}
        </button>

        <div className="flex flex-col md:flex-row justify-end w-full">
          <nav className="hidden md:flex mt-4 md:mt-0 justify-end w-full">
            <ul className="flex flex-col md:flex-row md:ml-auto space-y-2 md:space-y-0 md:space-x-8 text-2xl text-Light_blue">
              <li>
                <Link
                  to="/" // ハッシュ付きURL
                  className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:border-b-2 hover:border-[#ff1493] active:translate-y-1 transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about" // ハッシュ付きURL
                  className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:bg-[#ff80bf] hover:border-b-2 hover:border-[#ff1493] active:scale-95 transition-all duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact" // ハッシュ付きURL
                  className="btn btn--pink btn--emboss btn--cubic py-3 px-6 rounded-md hover:bg-[#ff80bf] hover:border-b-2 hover:border-[#ff1493] active:scale-95 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* モバイル用ナビゲーション（開いたときだけ表示） */}
      {menuOpen && (
        <nav className="md:hidden mt-10 space-y-2 text-2xl text-[#f5c4c8] flex flex-col items-start">
          <Link to="/home" className="btn w-full">
            Home
          </Link>
          <Link to="/about" className="btn w-full">
            About
          </Link>
          <Link to="/contact" className="btn w-full">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default PortfolioHeader;
