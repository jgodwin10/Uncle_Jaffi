import React, { useState } from "react";
import Item from "./Item";

const TakeOut = () => {
  const [open, setOpen] = useState("All");

  const tabs = [
    "All",
    "Burgers",
    "Uncle Jaffi Wraps Pita",
    "Shawarma",
    "Uncle Jaffi Wings",
    "Tacos",
    "Sandwiches",
    "Milkshakes",
    "Pizza",
  ];

  return (
    <div className="max-w-[1352px] space-y-[48px] mx-auto py-20 px-6  ">
      <div className="flex items-center gap-[21px] flex-wrap">
        {tabs.map((item, index) => {
          return (
            <button
              onClick={() => setOpen(item)}
              key={index}
              className={`${
                open == item ? "bg-[#FAB939]" : ""
              } border border-[#7D808B] py-[12px] min-w-[72px] px-[16px] rounded-[99px]`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="grid gap-[32px] sm:grid-cols-2 lg:grid-cols-3">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default TakeOut;
