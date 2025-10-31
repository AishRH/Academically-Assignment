import { FaSignal } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { BsBatteryHalf } from "react-icons/bs";
import { PiWaveformBold } from "react-icons/pi";

export default function ThreeRight() {
  return (
    <div className="relative 
      w-full 
      rounded-[1.5rem] sm:rounded-[2rem] 
      bg-[#e9ebf7] 
      shadow-[0_10px_20px_rgba(0,0,0,0.05)] 
      flex flex-col justify-start 
      p-4 sm:p-6 ">

      {/* Status bar */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
        <span className="text-[#0d0b3b] font-medium">9:41</span>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <FaSignal className="text-gray-600 text-[10px] sm:text-sm" />
          <FiWifi className="text-gray-600 text-[10px] sm:text-sm" />
          <BsBatteryHalf className="text-gray-600 text-[10px] sm:text-sm" />
        </div>
      </div>

      {/* Notification bubble */}
      <div className="bg-white rounded-2xl shadow-sm flex items-start gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 w-full max-w-[95%] sm:max-w-[320px] mx-auto">
        <div className="bg-[#4169e1]/10 p-1.5 sm:p-2 rounded-xl flex-shrink-0">
          <PiWaveformBold className="text-[#4169e1] text-base sm:text-lg" />
        </div>
        <div className="flex-1">
          <p className="text-xs sm:text-sm font-semibold text-[#0d0b3b] leading-tight">
            Speak
          </p>
          <p className="text-[10px] sm:text-xs text-gray-600 leading-snug">
            Hey Audrey, your trip to Mexico is in 6 days! Let’s practice some
            vocabulary for your trip!
          </p>
        </div>
        <span className="text-[9px] sm:text-[10px] text-gray-400 self-start whitespace-nowrap">now</span>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-[-1] grid grid-cols-3 gap-2 sm:gap-4 opacity-30 p-4 sm:p-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/40 rounded-xl sm:rounded-2xl backdrop-blur-sm"
          ></div>
        ))}
      </div>
    </div>
  );
}
