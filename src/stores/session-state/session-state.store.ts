import { createEntityStore, Store, StoreConfig } from "@datorama/akita";

export interface SessionState {
  name: string;
  city: string;
  state: string;
}

export function createInitialState(): SessionState {
  return {
    name: "",
    city: "",
    state: "",
  };
}

export const sessionStore = createEntityStore<SessionState>(createInitialState(), {name: "session"});


