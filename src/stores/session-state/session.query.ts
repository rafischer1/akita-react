import { createEntityQuery, Query } from "@datorama/akita";
import { sessionStore } from "./session-state.store";
import { SessionState } from "../../interfaces/session-state.interface";

export const sessionQuery = createEntityQuery<SessionState>(sessionStore);

  export const selectName$ = sessionQuery.select("name");

  export const sessionQuerySelectForm$ = sessionQuery.select([
    (state) => state.name,
    (state) => state.city,
    (state) => state.state,
  ]);



