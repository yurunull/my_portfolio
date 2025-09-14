import React from "react";
import Yururi from "../../public/images/yururi.png";
import {
  FaJs,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
} from "react-icons/fa";
import { SiTailwindcss, SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TfiVideoClapper } from "react-icons/tfi";

const About = () => {
  return (
    <>
      <div>
        <div className="px-6 md:px-10 py-10 bg-white text-gray-800 max-w-6xl mx-auto">
          {/* 見出し */}
          <h2 className="text-Light_blue text-2xl sm:text-6xl font-bold font-HANNARI mt-12 mb-4 ml-[3%]">
            About Me
          </h2>
          <hr className="border-t-2 border-pink-300 mb-12" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
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
                高校時代は映像制作に興味を持ち、Blenderを使った3Dモデル作成や、AfterEffectsを使った動画編集をしていました。
                <br />
                高3の時に「ベイマックス」に魅了され、「ベイマックスのようなロボットシステムを作りたい」と考え、プログラミングやAIを学べる会津大学に進学することを決めました。
                <br />
              </p>
              <p>
                小さい頃から自分の「好き」を形にすることが大好きで、大学に入ってからはAviutlやCanvaを使った動画制作やポスターデザイン、ロゴ作成に力を入れてきました。
              </p>
              <p>
                <br />
                現在は、React、JavaScript、Pythonを中心に学びながら、自分のペースで着実にスキルを向上させています。
                <br />
                少しずつ成長しながら、これからも楽しんで学び続けたいと考えています。
              </p>
            </div>

            <div className="mt-12">
              <div className="relative">
                <div className="absolute left-[20%] top-0 h-full border-l-2 border-dashed border-gray-400"></div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2006.3
                    </div>
                    <div className="text-right text-lg text-gray-700">誕生</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2021.4
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      朋優学院 入学
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2021.6
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      AfterEffectsを触り始める
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2021.9
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      blenderを触り始める
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2024.3
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      朋優学院 卒業
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2024.4
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      会津大学入学
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2024.6
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      C言語を学び始める
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2024.10
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      "PM体験とプログラミング開発を学ぶ2days"に参加
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2025.2
                    </div>
                    <div className="text-right text-lg text-gray-700">
                      "Beginner's Hackathon"に参加
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2025.9
                    </div>
                    <div className="text-lg text-gray-700">
                      "RSS Hackathon 2025 Beyond" 奨励賞受賞
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-Light_brown font-medium">
                      2025
                    </div>
                    <div className="text-lg text-gray-700">
                      現在
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex flex-col gap-12">
              {/* Skillセクション */}
              <div className="flex items-center p-6 rounded-lg border-2 border-Light_blue">
                <div className="px-6 py-3 rounded-full border-2 border-Light_blue flex items-center justify-center">
                  <h4 className=" text-[1.2rem] md:text-[2.1rem] font-semibold text-brown-600 flex items-center">
                    <span className="mr-3  text-[1.2rem] md:text-[2.1rem]">
                      💻
                    </span>{" "}
                    Skill
                  </h4>
                </div>
                <ul className="ml-10  text-[1.2rem] md:text-[2.1rem] text-brown-600 font-HANNARI space-y-3 max-w-full">
                  <li className="flex items-center gap-3">
                    <VscVscode size={24} className="text-Light_blue" /> Visual
                    Studio Code
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCuttlefish size={24} className="text-Light_blue" /> C
                  </li>
                  <li className="flex items-center gap-3">
                    <TfiVideoClapper size={24} className="text-Light_blue" />{" "}
                    Aviutl
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHtml5 size={24} className="text-Light_blue" /> HTML
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCss3Alt size={24} className="text-Light_blue" /> CSS
                  </li>
                  <li className="flex items-center gap-3">
                    <SiTailwindcss size={24} className="text-Light_blue" />{" "}
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-3">
                    <SiCanva size={24} className="text-Light_blue" /> Canva
                  </li>
                </ul>
              </div>

              {/* Learningセクション */}
              <div className="flex items-center p-6 rounded-lg border-2 border-Light_blue">
                <div className="px-3 py-3 rounded-full border-2 border-Light_blue flex items-center justify-center">
                  <h4 className=" text-[1.2rem] md:text-[2.1rem] font-semibold text-brown-600 flex items-center">
                    <span className="mr-3  text-[1.2rem] md:text-[2.1rem]">
                      📘
                    </span>{" "}
                    Learning
                  </h4>
                </div>
                <ul className="ml-7  text-[1.1rem] md:text-[2.1rem] text-brown-600 font-HANNARI space-y-3">
                  <li className="flex items-center gap-3">
                    <FaJs size={24} className="text-Light_blue" /> JavaScript
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPython size={24} className="text-Light_blue" /> Python
                  </li>
                  <li className="flex items-center gap-3">
                    <FaReact size={24} className="text-Light_blue" /> React
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
