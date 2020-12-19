import { createEntityQuery, Query } from "@datorama/akita";
import { SessionState, sessionStore } from "./session-state.store";

export const sessionQuery = createEntityQuery<SessionState>(sessionStore);
  // allState$ = this.select();

  export const selectName$ = sessionQuery.select("name");

  // // Returns [name, age]
  // multiPropsCallback$ = this.select([
  //   (state) => state.name,
  //   (state) => state.city,
  //   (state) => state.state,
  // ]);



