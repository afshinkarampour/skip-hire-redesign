import type { Skip } from "../types/skip";
import { IoWarningOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { calculateTotalPrice } from "../utils/price";
import { getSkipImage } from "../assets/assets";

type SkipProps = { skip: Skip; isSelected?: boolean };

const SkipCard = ({ skip, isSelected = false }: SkipProps) => {
  const price = calculateTotalPrice(skip);

  return (
    <div
      className={`group relative rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 transition cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
        isSelected ? "ring-4 ring-green-500" : "border border-transparent"
      }`}
    >
      <img
        src={getSkipImage(skip.size)}
        alt={`Skip ${skip.size} Yard`}
        className="h-[300px] w-full object-cover"
      />

      {/* Mobile Content */}
      <div className="absolute bottom-10 left-0 w-full bg-black/60 text-white px-4 py-3 lg:hidden space-y-2">
        <p className="text-green-600 text-3xl font-bold">
          £{Math.round(price)}
        </p>
        <p>{skip.hire_period_days} day Hire Period</p>

        {!skip.allowed_on_road && (
          <p className="text-red-500 flex items-center gap-1">
            <IoWarningOutline size={20} /> Not Allowed On The Road
          </p>
        )}

        {!skip.allows_heavy_waste && (
          <p className="text-amber-500 flex items-center gap-1">
            <IoWarningOutline size={20} /> Not Suitable for Heavy Waste
          </p>
        )}
      </div>

      {/* Desktop Hover Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-70 transition duration-300 flex flex-col items-center justify-center text-center px-4 space-y-2">
        <p className="text-green-600 text-3xl font-bold">
          £{Math.round(price)}
        </p>
        <p>{skip.hire_period_days} day Hire Period</p>

        {!skip.allowed_on_road && (
          <p className="text-red-500 flex items-center gap-1">
            <IoWarningOutline size={20} /> Not Allowed On The Road
          </p>
        )}

        {!skip.allows_heavy_waste && (
          <p className="text-amber-500 flex items-center gap-1">
            <IoWarningOutline size={20} /> Not Suitable for Heavy Waste
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center gap-3 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-xl font-semibold">
        <h2 className="text-yellow-500">{skip.size} Yard Skip</h2>
        {isSelected && (
          <div className="bg-green-500 rounded-full p-1">
            <GiCheckMark className="text-white" size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
