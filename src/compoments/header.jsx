import React, { useState } from "react";
import Logo from "../../public/images/logo.png"; // ロゴ画像のインポート
import "../../public/index.css";
import "../../public/tailwind.css?url";
import { FaMinus } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";
import { Link } from "react-router-dom"; // Linkをインポート

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-10 px-4 md:px-8 w-full relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* ロゴ */}
        <div className="absolute left-4 top-4 flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-10 w-auto md:h-16" />
          <p className="text-Light_brown text-1xl md:text-3xl font-HANNARI">
            YURURI
          </p>
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
