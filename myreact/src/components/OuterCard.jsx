export default function OuterCard({leftContent, rightContent }) {
  return (
<div
  className="flex flex-col lg:flex-row items-center md:items-start justify-between
    gap-7 md:gap-10 lg:gap-14 bg-white rounded-3xl shadow-2xl
    px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:w-[80%]
    w-[90%] lg:w-[900px] h-[600px] sm:h-[700px] lg:h-[500px]
    transition-transform duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
    mx-auto "
>
{/* Left Section */}
<div className="w-full lg:w-[45%] flex flex-col justify-between h-full text-center md:text-left py-4">
  {leftContent}
</div>

{/* Right Section */}
<div
  className="flex flex-col items-center justify-center 
  w-full lg:w-[48%] px-2 py-4
  bg-gray-100 rounded-2xl sm:rounded-3xl 
  h-[640px] sm:h-[500px] md:h-[520px] lg:h-[380px] 
  "
>
  {rightContent}
</div>
</div>
  );
}
