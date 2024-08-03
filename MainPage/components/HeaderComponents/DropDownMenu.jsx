import React from "react";
export default function DropDownMenu(props) {
  return (
    <div
      className="flex px-64 py-10 list-none"
      onMouseLeave={props.onMouseOver}
    >
      {props.menu.map((item) => (
        <div className="flex-1">
          <ul href="" className="font-bold py-5">
            {item.title}
          </ul>
          <div className="text-neutral-400 font-bold text-sm space-y-2">
            {item.items.map((item) => (
              <li
                href=""
                className="cursor-pointer text-neutral-400 font-bold text-sm space-y-2 hover:text-white"
              >
                {item}
              </li>
            ))}
            </div>
            </div>
          ))}
    </div>
  );
}
