import React, { useEffect, useState } from "react";
import Flame from "../images/flame.png";
import Yururi from "../images/yururi.png";
import Recode from "../images/recode.png";
import RecodeTop from "../images/recode_top.png";
import AizuHack from "../images/Aizu_Hack.png";
import ReAizuHack from "../images/ReAizu_Hack.png";
import AizuHack_poster from "../images/AizuHack_poster.png";
import Beginner from "../images/Beginner.png";
import Movie from "../images/night.mp4";
import Movie1 from "../images/start_sound.mp4";
import Movie2 from "../images/seikou_sound.mp4";
import Movie3 from "../images/mistake_sound.mp4";
import "../tailwind.css?url";
import "../App.css";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";


const images = [
  { src: AizuHack, label: "#Aizu Hack_logo" },
  { src: Beginner, label: "#Beginner's Hackathon_poster" },
  { src: AizuHack_poster, label: "#Aizu Hack_poster" },
  { src: ReAizuHack, label: "#Re:Aizu Hack_logo" },
];

const VideoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const videoList = [
    {
      src: Movie1,
      description:
        "動画1：会津大学 学園祭での企画「Save the UoA」のオープニング",
    },
    {
      src: Movie2,
      description:
        "動画2：会津大学 学園祭での企画「Save the UoA」のエンディング 成功var",
    },
    {
      src: Movie3,
      description: "動画3：会津大学 学園祭での企画「Save the UoA」のエンディング 失敗var",
    },
  ];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };


  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl shadow-xl overflow-hidden w-[90vw] sm:w-[640px] mx-auto">
      <div className="relative aspect-video">
        <video
          key={currentIndex}
          src={videoList[currentIndex].src}
          autoPlay
          muted={isMuted}
          onEnded={goNext}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={goPrev}
            className="bg-Light_blue hover:bg-blue-600 p-2 rounded-full text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="bg-Light_blue hover:bg-blue-600 p-2 rounded-full text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 bg-pink-300 text-white p-2 rounded-full hover:bg-pink-400"
          title={isMuted ? "音声オンにする" : "音声ミュートにする"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      <p className="text-center text-base sm:text-lg text-gray-700 font-light py-4 px-6">
        {videoList[currentIndex].description}
      </p>
    </div>
  );
};

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFullScreen(window.innerWidth >= 1980);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleImageClick = (img) => {
    setSelectedImg(img); // 選択された画像を状態にセット
  };

  return (
    <>
      <div className="relative flex justify-center items-center bg-[#f5c4c8]">
        <video
          className="absolute w-[1920px] h-[1080px] object-cover max-w-full max-h-full rounded-lg"
          src={Movie}
          autoPlay
          loop
          muted
        ></video>

        <div className="relative flex justify-center items-center">
          <img
            src={Flame}
            alt="top"
            className="max-w-full max-h-full rounded-lg relative z-10"
          />
          <div
            className="text-Light_blue absolute font-bold px-4 py-2 rounded-lg"
            style={{
              bottom: "15%",
              right: "27%",
              transform: "translate(50%, 50%)",
              fontFamily: "DigitalClock",
              fontSize: "clamp(10px, 3vw, 80px)",
            }}
          >
            {currentTime}
          </div>
        </div>
      </div>

      <div className="relative px-8 py-4">
        <h2 className="text-Light_blue text-[2.8vw] ml-[6%] font-bold mt-8 font-HANNARI">
          My Work
        </h2>
        <hr className="border-t-2 border-gray-300 my-12" />
        <p className="text-[1.5vw] ml-[3%] text-gray-500 -mt-2 mb-8">
          Movie(3)
        </p>

        <div className="w-full flex justify-center items-center gap-8 flex-wrap">
          <div className="w-full flex justify-center z-1">
            <VideoSlideshow />
          </div>

          {isFullScreen && (
            <div
              className="relative flex items-center mt-4 justify-end ml-auto"
              style={{ marginTop: "-800px" }}
            >
              <img
                src={Recode}
                alt="recode"
                className="opacity-50 max-w-[500px] max-h-[500px] rounded-lg"
              />
              <div className="absolute top-[26%] left-[47.5%] z-10 pointer-events-none text-[1.7vw]">
                <div className="relative w-[300px] h-[300px]">
                  {Array.from("My work").map((char, index) => (
                    <span
                      key={index}
                      className="absolute text-[#ffffff] animate-orbit top-20"
                      style={{
                        transformOrigin: "0 150px",
                        animationDelay: `${index * 0.6}s`,
                        transform: `rotate(${
                          index * (360 / 8)
                        }deg) translateX(200px)`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={RecodeTop}
                alt="recode top"
                className="absolute top-0 left-3 max-w-[500px] max-h-[500px] rounded-lg z-20"
                style={{ top: "-12px" }}
              />
            </div>
          )}
        </div>

        <p className="text-[1.5vw] ml-[3%] text-gray-500 -mt-2 mb-8">
          design(4)
        </p>
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-[1600px] w-full">
            {images.map((img, index) => (
              <div
                key={index}
                className="transition transform hover:scale-105 duration-300"
              >
                <div className="rounded overflow-hidden shadow-md">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full object-cover"
                    onClick={() => setSelectedImg(img)}
                  />
                  <p className="text-center text-2sm mt-4">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative flex justify-center items-center">
              <img
                src={selectedImg.src}
                alt={selectedImg.label}
                className="max-w-[50%] max-h-[50%] rounded-lg cursor-zoom-in transition-transform duration-300 ease-in-out object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 画像のクリックを防ぐ
                  setSelectedImg(null);
                }}
                className="absolute top-3 right-6 text-white text-4xl font-bold bg-Light_blue hover:bg-Light_blue/70 rounded-full p-3"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <hr className="border-t-2 border-gray-300 my-12" />
        <h2 className=" text-Light_blue text-[2.8vw] ml-[6%] font-bold mt-8 font-HANNARI">
          About Me
        </h2>
        <hr className="border-t-2 border-gray-300 my-12" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-32">
          {/* 左：プロフィール写真 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={Yururi}
              alt="yururi"
              className="rounded-2xl shadow-lg max-w-[400px] w-full h-auto object-cover"
            />
          </div>

          {/* 右：説明文 */}
          <div className="w-full md:w-2/3 text-[1.3rem] md:text-[2.1rem] leading-relaxed font-HANNARI tracking-wide">
            <p className="mb-4">
              はじめまして、ゆるりと申します。
              <br />
              会津大学の学部2年で、プログラミングを中心に日々学んでいます。
              <br />
              カフェ巡りや「どうぶつの森」が好きで、気ままに楽しみながら、自分の「好き」を表現することが好きです。
              デザインやAIにも興味があり、このポートフォリオもその一つとして、楽しみながら制作しました。
            </p>
            <p>
              現在は、React・JavaScript・Pythonを中心に勉強中です。
              <br />
              少しずつ成長しながら、これからも楽しんで学び続けたいと考えています。
            </p>
            <div className="absolute bottom-[-10] right-20 text-right mt-4">
              <a
                href="/about"
                className="text-Light_blue md:w-2/3 text-[1.3rem] md:text-[2.1rem] hover:underline"
              >
                About more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
