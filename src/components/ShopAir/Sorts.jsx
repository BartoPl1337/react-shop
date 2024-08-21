import { SlidersHorizontal } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Sorts = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1">Air Max Dn (36)</div>
        <div className="flex-1"></div>
        <div className="flex-1 flex">
          <button className="flex gap-3">
            <span>Ukryj filtry</span>
            <SlidersHorizontal />
          </button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="">
          <div className="sticky top-0">
            SideBar
          </div>
        </div>
        <div className=" col-span-5">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
