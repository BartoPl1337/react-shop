import { SlidersHorizontal } from "lucide-react";
import React from "react";
const Sorts = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1">Air Max Dn (36)</div>
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <div>
            <button className="flex">Ukryj filtry <SlidersHorizontal /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
