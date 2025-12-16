const AuthCard = ({ title, subtitle, children, footer }) => {
    return (
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">{title}</h2>
        <p className="text-gray-500 text-sm text-center mb-6">{subtitle}</p>
        {children}
        {footer}
      </div>
    );
  };
  
  export default AuthCard;
  