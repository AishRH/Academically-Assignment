import { FaRegHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcButtingIn } from "react-icons/fc";

export default function OneRight() {
  return (
    <div className="relative bg-white rounded-3xl p-4 flex flex-col gap-4 shadow-md w-fit h-fit mx-auto">
      {/* Top Icon */}
      <div className="flex items-center justify-start">
        <FcButtingIn size={40} className="sm:size-10" />
      </div>

      {/* Row of Equal-Sized Small Cards */}
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        {/* Wrapper ensures equal height */}
        <div className="flex gap-2">
          {/* Card 1 */}
          <div className="bg-rose-400 rounded-xl text-white p-3 flex flex-col items-start sm:aspect-square w-30 sm:w-40 h-36 sm:h-40">
            <FaRegHeart className="text-xl sm:text-2xl mb-1" />
            <p className="text-xs sm:text-sm font-semibold leading-snug">
              You’re interested in traveling and exploring new cultures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 rounded-xl text-white p-3 flex flex-col items-start sm:aspect-square w-30 sm:w-40 h-36 sm:h-40">
            <GiHamburgerMenu className="text-xl sm:text-2xl mb-1" />
            <p className="text-xs sm:text-sm font-semibold leading-snug">
              We’ve created unique lessons and conversations based on those goals.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 self-stretch">
        <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-700 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
