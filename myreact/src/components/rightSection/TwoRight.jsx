import { FaUser, FaRobot, FaImage } from "react-icons/fa";

export default function TwoRight() {
  return (
    <div className="bg-white rounded-3xl shadow-xl 
      w-full  
      px-5 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 
      ">

      {/* Heading */}
      <h3 className="text-center text-gray-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
        Create your own
      </h3>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Options */}
      <div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4">
        {/* Option 1 */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-2 sm:pb-3">
          <FaUser className="text-[#0d0b3b] text-base sm:text-lg" />
          <p className="text-[#0d0b3b] font-medium text-sm sm:text-base">Tourist</p>
        </div>

        {/* Option 2 */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-2 sm:pb-3">
          <FaRobot className="text-[#0d0b3b] text-base sm:text-lg" />
          <p className="text-[#0d0b3b] font-medium text-sm sm:text-base">New friend</p>
        </div>

        {/* Option 3 */}
        <div className="flex items-start gap-3">
          <FaImage className="text-[#0d0b3b] text-base sm:text-2xl mt-0.5" />
          <p className="text-[#0d0b3b] font-medium text-sm sm:text-base leading-snug">
            Talking about the best places to grab dinner in San Francisco.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-5 sm:mt-6 bg-[#2a52ff] text-white py-2.5 sm:py-3 
        rounded-xl font-semibold text-sm sm:text-base 
        hover:bg-blue-700 transition-all">
        Start chatting
      </button>
    </div>
  );
}
