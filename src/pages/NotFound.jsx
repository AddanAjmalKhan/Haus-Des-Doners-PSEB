import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#5B8CFF] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md sm:max-w-sm md:max-w-md rounded-2xl shadow-xl p-6 sm:p-8 text-center">

        {/* Top bar with animated circles */}
        <div className="bg-[#2F80ED] rounded-xl p-6 sm:p-6 mb-6">
          <div className="flex gap-2 mb-4 justify-center">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-300"></span>
          </div>

          {/* 404 Text */}
          <h1 className="text-5xl sm:text-[64px] font-bold text-[#F9A825] leading-none">
            404
          </h1>

          {/* Animated lines */}
          <div className="mt-4 space-y-2 flex flex-col items-center">
            <div className="h-1 w-1/2 sm:w-1/3 bg-white/60 rounded animate-pulse"></div>
            <div className="h-1 w-1/2 sm:w-1/3 bg-white/60 rounded animate-pulse delay-150"></div>
            <div className="h-1 w-1/4 sm:w-1/5 bg-white/60 rounded animate-pulse delay-300 ml-auto sm:ml-auto"></div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Looks like you’ve got lost...
        </p>

        <Link
          to="/"
          className="inline-block bg-[#5B8CFF] hover:bg-[#4A7AF0] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
