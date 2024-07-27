import React, { useState } from "react";
import Item from "./Item";

const Food = () => {
  const [open, setOpen] = useState("All");

  const tabs = [
    "All",
    "Snacks and Shares",
    "Salads",
    "Burgers",
    "Sandwiches",
    "Grills",
    "Pastas",
    "Platter",
    "Side Dishes",
    "Dips",
    "Deserts and Kids",
    "Takeaway",
  ];

  return (
    <div className="md:px-[70px]  py-20 px-6  ">
      <div className="space-y-[48px] max-w-[1352px] mx-auto">
        <div className="flex items-center gap-[21px] flex-wrap">
          {tabs.map((item, index) => {
            return (
              <button
                onClick={() => setOpen(item)}
                key={index}
                className={`${
                  open == item ? "bg-[#FAB939] scale-[1.2]" : ""
                } border border-[#7D808B] py-[12px] min-w-[72px] px-[16px] rounded-[99px]`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid gap-[32px] sm:grid-cols-2 xl:grid-cols-3">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Food;
