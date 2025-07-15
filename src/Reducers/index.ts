// reducer.ts
export type NavAction = { type: "ADD_AGENT" } | { type: "ADD_PROPERTY" } | { type: "ADD_NOTES" };

export type NavState = {
  selected: string;
};

export const initialState: NavState = {
  selected: "",
};

export function reducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case "ADD_AGENT":
    case "ADD_PROPERTY":
    case "ADD_NOTES":
      return { selected: action.type };
    default:
      return state;
  }
}
