"use client";

import React, { useReducer } from "react";
import { NavAction, NavState } from "@/Reducers";

type Props = {
  state: NavState;
  dispatch: React.Dispatch<NavAction>;
};

export default function NavigationMenu({ state, dispatch }: Props) {
  const handleClick = (e: React.MouseEvent, action: NavAction) => {
    e.preventDefault();
    dispatch(action);
  };

  return (
    <ul className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gray-100">
      <li className="text-base border border-solid rounded-md px-4 py-2">
        <a href="#" onClick={(e) => handleClick(e, { type: "ADD_AGENT" })}>
          Add Agent
        </a>
      </li>
      <li className="text-base border border-solid rounded-md px-4 py-2">
        <a href="#" onClick={(e) => handleClick(e, { type: "ADD_PROPERTY" })}>
          Add Property
        </a>
      </li>
      <li className="text-base border border-solid rounded-md px-4 py-2">
        <a href="#" onClick={(e) => handleClick(e, { type: "ADD_NOTES" })}>
          Add Notes
        </a>
      </li>
    </ul>
  );
}
