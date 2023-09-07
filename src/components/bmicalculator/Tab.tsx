import { Flex, Tabs } from "@radix-ui/themes";
import React, { useState } from "react";
import classNames from "classnames";
interface TabProps {
  genders: string[];
}
const Tab: React.FC<TabProps> = ({ genders }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const togglegender = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className=" flex gap-9">
      {genders.map((gender, index) => (
        <button
          key={gender}
          onClick={() => togglegender(index)}
          className={classNames(
            "bg-white border-2 px-7 py-3 transition-all duration-500 ease-in-out",
            {
              "border-secondary-12 text-secondary-9": index === activeIndex,
              "text-accent-9 border-accent-9": index !== activeIndex,
            }
          )}
        >
          {gender}
        </button>
      ))}
    </div>
  );
};

export default Tab;
