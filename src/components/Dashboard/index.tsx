"use client";

import { useReducer } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { reducer, initialState } from "@/Reducers";
import PropertyAgentTemplate from "../Forms/PropertyAgent";

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start gap-4">
      <NavigationMenu state={state} dispatch={dispatch} />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-6">
        {state.selected === "ADD_AGENT" && (
          <>
            <PropertyAgentTemplate />
          </>
        )}
        {state.selected === "ADD_PROPERTY" && <div>Add Property Form</div>}
        {state.selected === "ADD_NOTES" && <div>Add Notes Form</div>}
        {!state.selected && <div>Select a menu item above</div>}
      </main>
    </div>
  );
}
