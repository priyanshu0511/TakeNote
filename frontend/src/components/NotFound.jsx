import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
