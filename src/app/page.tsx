"use client";

import { useState, useCallback } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const yesButtonSize = noCount * 20 + 16;

  const contentStages = [
    {
      image: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
      text: "Will you be my Valentine?",
    },
    {
      image: "/photos/us.jpeg",
      text: "Are you sure? Dekhlo",
    },
    {
      image: "/photos/us_more_cuter.jpeg",
      text: "We look very cute together though!!",
    },
    {
      image: "/photos/date.jpeg",
      text: "I will take you on so many dates, pls",
    },
    {
      image: "/photos/me.jpeg",
      text: "You are going to hurt this boy, Dekhlo!!",
    },
    {
      image: "/photos/cutie.jpeg",
      text: "I will leak your photos heeehheeee",
    },
    {
      image: "/photos/loki.jpeg",
      text: "Ek aur baar no kiya to loki will haunt you in your dreams",
    },
  ];

  const getRandomPosition = useCallback(() => {
    // Keep button within typical laptop screen bounds (with some padding)
    const maxX = 300; // Max horizontal offset from center
    const maxY = 200; // Max vertical offset from center
    const randomX = (Math.random() - 0.5) * 2 * maxX;
    const randomY = (Math.random() - 0.5) * 2 * maxY;
    return { x: randomX, y: randomY };
  }, []);

  const handleNoClick = () => {
    if (noCount < 5) {
      setNoCount(noCount + 1);
    } else if (noCount === 5) {
      setNoCount(noCount + 1);
      setButtonPosition(getRandomPosition());
    }
  };

  const handleNoHover = () => {
    if (noCount > 5) {
      setButtonPosition(getRandomPosition());
    }
  };

  const getCurrentContent = () => {
    return contentStages[Math.min(noCount, contentStages.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center overflow-hidden relative z-10">
      {yesPressed ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="drop-shadow-xl"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear kiss"
          />
          <div className="my-4 text-4xl font-bold text-pink-600 drop-shadow-md">
            YAAAAAAAYYYYYIIIIIEEEEEEE!!! I love you CUTTIEEE!! ;))
          </div>
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[250px] object-cover rounded-2xl shadow-2xl border-4 border-white/50"
            src={getCurrentContent().image}
            alt="Valentine"
          />
          <h1 className="my-4 text-4xl text-center px-4 font-bold text-pink-700 drop-shadow-sm">
            {getCurrentContent().text}
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-bold text-white shadow-lg hover:from-pink-600 hover:to-rose-600 hover:shadow-xl transition-all duration-300`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              className="rounded-full bg-gradient-to-r from-gray-400 to-gray-500 px-6 py-3 font-bold text-white shadow-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300"
              style={{
                position: noCount > 5 ? "relative" : "static",
                left: buttonPosition.x,
                top: buttonPosition.y,
                transition: "all 0.3s ease-out",
              }}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}
