import React, { useEffect, useState } from "react";
import Flame from "../../public/images/flame.png";
import Yururi from "../../public/images/yururi.png";
import Recode from "../../public/images/recode.png";
import RecodeTop from "../../public/images/recode_top.png";
import AizuHack from "../../public/images/Aizu_Hack.png";
import ReAizuHack from "../../public/images/ReAizu_Hack.png";
import AizuHack_poster from "../../public/images/AizuHack_poster.png";
import Beginner from "../../public/images/Beginner.png";
import Movie from "../../public/images/night.mp4";
import Movie2 from "../../public/images/seikou_sound.mp4";
import Movie3 from "../../public/images/mistake_sound.mp4";
import "../tailwind.css?url";
import "../App.css";
import "../index.css";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

const images = [
  { src: AizuHack, label: "#Aizu Hack logo" },
  { src: Beginner, label: "#Beginner's Hackathon poster" },
  { src: AizuHack_poster, label: "#Aizu Hack poster" },
  { src: ReAizuHack, label: "#Re:Aizu Hack logo" },
];

const VideoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const videoList = [
    {
      src: "https://www.youtube.com/embed/htfA5HXQrog",
      isExternal: true,
      description: "動画1：会津大学 学園祭「Save the UoA」オープニング",
    },
    {
      src: Movie2,
      isExternal: false,
      description: "動画2：学園祭「Save the UoA」エンディング（成功ver）",
    },
    {
      src: Movie3,
      isExternal: false,
      description: "動画3：学園祭「Save the UoA」エンディング（失敗ver）",
    },
  ];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const toggleMute = () => setIsMuted((prev) => !prev);

  const currentVideo = videoList[currentIndex];

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-Light_brown rounded-xl shadow-xl overflow-hidden w-[90vw] sm:w-[640px] mx-auto">
      <div className="relative aspect-video">
        {currentVideo.isExternal ? (
          <iframe
            key={currentIndex}
            src={currentVideo.src}
            title="External Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            key={currentIndex}
            src={currentVideo.src}
            autoPlay
            muted={isMuted}
            onEnded={goNext}
            className="w-full h-full object-cover"
          />
        )}

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

        {!currentVideo.isExternal && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-pink-300 text-white p-2 rounded-full hover:bg-pink-400"
            title={isMuted ? "音声オンにする" : "音声ミュートにする"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        )}
      </div>
      <p className="text-center text-base sm:text-lg text-gray-700 font-light py-4 px-6">
        {currentVideo.description}
      </p>
    </div>
  );
};

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsFullScreen(window.innerWidth >= 1980);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Section */}
      <div className="relative flex justify-center items-center bg-[#f5c4c8]">
        <video
          className="absolute w-[1920px] h-[1080px] object-cover max-w-full max-h-full rounded-lg"
          src={Movie}
          autoPlay
          loop
          muted
        />
        <div className="relative flex justify-center items-center">
          <img
            src={Flame}
            alt="Top Image"
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

      {/* My Work Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-2">
        <h2 className="text-Light_blue text-2xl sm:text-6xl font-bold font-HANNARI mt-12 ml-[3%]">
          My Work
        </h2>
        <hr className="border-t-2 border-pink-400 my-6" />

        <p className="text-[2.0vw] ml-[3%] text-gray-500 mt-24 mb-8">
          Movie(3)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <VideoSlideshow />

          {isFullScreen && (
            <div
              className="relative flex items-center mt-4 justify-end ml-auto"
              style={{ marginTop: "-350px" }}
            >
              <img
                src={Recode}
                alt="Recode Background"
                className="opacity-50 max-w-[500px] max-h-[500px] rounded-lg"
              />
              <div className="absolute top-[32%] left-[48%] z-10 pointer-events-none text-[1.7vw]">
                <div className="relative w-[270px] h-[300px]">
                  {Array.from("my work").map((char, index) => (
                    <span
                      key={index}
                      className="absolute text-white animate-orbit top-24"
                      style={{
                        transformOrigin: "0 140px",
                        animationDelay: `${index * 0.6}s`,
                        transform: `rotate(${
                          index * (360 / 8)
                        }deg) translateX(130px)`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={RecodeTop}
                alt="Recode Top"
                className="absolute top-[80px] left-10 max-w-[500px] max-h-[500px] rounded-lg z-20"
              />
            </div>
          )}
        </div>

        <p className="text-[2.0vw] ml-[3%] text-gray-500 mt-24 mb-8">
          design(4)
        </p>

        <div className="flex justify-center px-4 mt-8">
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
                    className="w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImg(img)}
                  />
                  <p className="text-center text-sm mt-4">{img.label}</p>
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
            <div className="relative">
              <img
                src={selectedImg.src}
                alt={selectedImg.label}
                className="max-w-[80vw] max-h-[80vh] rounded-lg object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
                className="absolute top-4 right-4 text-white text-4xl font-bold bg-Light_blue hover:bg-Light_blue/70 rounded-full p-2"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>

      {/* About Me Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-2">
        <h2 className="text-Light_blue text-2xl sm:text-6xl font-bold font-HANNARI mt-12 ml-[3%]">
          About Me
        </h2>
        <hr className="border-t-2 border-pink-300 my-6" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={Yururi}
              alt="プロフィール写真"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
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
              <div className="absolute bottom-0 right-[60px] md:right-[200px] text-right mt-4">
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
      </section>
    </>
  );
};

export default Home;
