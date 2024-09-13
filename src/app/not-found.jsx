import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 lg:px-40 py-8">
        <h1 className="text-6xl font-bold text-orange-600 dark:text-orange-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          It seems you've ventured into uncharted territory. Don't worry, even
          the best explorers sometimes take an unexpected turn.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
          >
            <Home className="mr-2" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
