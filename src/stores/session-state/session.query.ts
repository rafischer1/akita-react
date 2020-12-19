import { createEntityQuery, Query } from "@datorama/akita";
import { SessionState, sessionStore } from "./session-state.store";

export const sessionQuery = createEntityQuery<SessionState>(sessionStore);

  export const selectName$ = sessionQuery.select("name");

  export const sessionQuerySelectForm$ = sessionQuery.select([
    (state) => state.name,
    (state) => state.city,
    (state) => state.state,
  ]);


