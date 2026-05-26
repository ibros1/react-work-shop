import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex flex-col  justify-center items-center space-y-2">
      <h2 className="font-bold text-7xl">404 Page</h2>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <button
        onClick={handleBack}
        className="bg-rose-600 text-white hover:bg-rose-500 transition-all px-4 duration-600 font-semibold rounded-md py-2 "
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFoundPage;
