import { createEntityStore } from "@datorama/akita";
import { SessionState } from "../../interfaces/session-state.interface";

export function createInitialState(): SessionState {
  return {
    name: "",
    city: "",
    state: "",
  };
}

export const sessionStore = createEntityStore<SessionState>(
  createInitialState(),
  { name: "session" }
);
