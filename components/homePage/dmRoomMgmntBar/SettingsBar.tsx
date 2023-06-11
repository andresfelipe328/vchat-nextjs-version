import React from "react";

import { AiTwotoneSetting } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";

const SETTINGMENU = [
  {
    icon: AiTwotoneSetting,
  },
  {
    icon: BsFillMicFill,
  },
  {
    icon: BiHeadphone,
  },
];

const SettingsBar = () => {
  return (
    <div className="border-t-4 border-t-sub-bg p-2 flex items-center">
      <small className="font-semibold flex-1">@username</small>

      <ul className="flex">
        {SETTINGMENU.map((setting, index) => (
          <li key={index}>
            <button className="flex items-center rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-1 transition-all duration-300 ease-in-out">
              <setting.icon className="icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsBar;
