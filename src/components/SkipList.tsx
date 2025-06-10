import { useState } from "react";
import { useSkip } from "../hooks/useSkip";
import { calculateTotalPrice } from "../utils/price";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import SkipCard from "./SkipCard";

import type { Skip } from "../types/skip";

const SkipList = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleCardClick = (skip: Skip) => {
    if (selectedSkip?.id === skip.id) setSelectedSkip(null);
    else setSelectedSkip(skip);
  };

  const { skips, error, loading } = useSkip();

  if (loading)
    return (
      <div className="flex justify-center items-center h-64" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600 dark:fill-cyan-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (error) return <p className="text-red-500">{error}</p>;

  if (skips.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FiPackage className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          There is no Skip to Show!
        </h3>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Try again
        </button>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {skips.map((skip) => (
          <div
            key={skip.id}
            onClick={() => handleCardClick(skip)}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <SkipCard skip={skip} isSelected={selectedSkip?.id === skip.id} />
          </div>
        ))}
      </div>

      {selectedSkip && (
        <div className="flex justify-between sticky bottom-0 mt-6 border-t border-gray-300 dark:border-gray-600 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 lg:px-10 transition-all duration-500">
          <div>
            <div className="flex justify-start gap-2 lg:gap-7 items-center">
              <h2 className="text-md lg:text-xl font-bold text-gray-800 dark:text-white">
                {selectedSkip.size} Yard Skip
              </h2>
              <p className="text-2xl font-semibold text-green-600">
                £{Math.round(calculateTotalPrice(selectedSkip))}
              </p>
            </div>
            <p className="ml-5">{selectedSkip.hire_period_days} day hire</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center group rounded bg-green-500 text-white px-4 py-2 lg:rounded-full hover:bg-green-600 transition-all duration-300 cursor-pointer">
              <span className="lg:opacity-0 lg:group-hover:opacity-100 lg:w-0 lg:group-hover:w-[4.5rem] transition-all duration-300 overflow-hidden whitespace-nowrap">
                Back
              </span>
              <FaArrowLeft
                className="hidden lg:block"
                size={20}
                title="Previous step"
              />
            </div>
            <div className="flex items-center group rounded bg-green-500 text-white px-4 py-2 lg:rounded-full hover:bg-green-600 transition-all duration-300 cursor-pointer">
              <span className="lg:opacity-0 lg:group-hover:opacity-100 lg:w-0 lg:group-hover:w-[4.2rem] transition-all duration-300 overflow-hidden whitespace-nowrap">
                Next
              </span>
              <FaArrowRight
                className="hidden lg:block"
                size={20}
                title="Next step"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkipList;
