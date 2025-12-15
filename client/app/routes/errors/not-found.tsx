import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
      <h1 className="text-9xl font-extrabold text-blue-400 mb-2">404</h1>
      <h2 className="text-3xl font-semibold text-gray-100 mb-2">
        Page not found
      </h2>
      <p className="text-gray-400">Sorry, the page doesn't exist</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 mt-8 py-2 rounded hover:bg-blue-700"
      >Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
