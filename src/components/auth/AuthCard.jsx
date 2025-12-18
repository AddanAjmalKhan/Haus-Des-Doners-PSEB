const AuthCard = ({ title, subtitle, children, footer }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#5B8CFF] overflow-hidden">
      
      {/* SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="900" fill="#5B8CFF" />
        <path
          d="M0,200 C150,300 350,100 550,180 C750,260 950,380 1150,300 C1350,220 1440,260 1440,260 L1440,900 L0,900 Z"
          fill="#6A97FF"
        />
        <path
          d="M0,350 C200,450 400,250 650,330 C900,410 1100,520 1440,420 L1440,900 L0,900 Z"
          fill="#7FA7FF"
          opacity="0.9"
        />
      </svg>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-xl px-8 py-10">
        {title && (
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-gray-500 text-sm text-center mb-6">
            {subtitle}
          </p>
        )}

        {children}

        {footer && (
          <div className="mt-6 text-center text-sm text-gray-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
