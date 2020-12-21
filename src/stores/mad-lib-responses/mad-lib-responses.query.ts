import { createEntityQuery } from "@datorama/akita";
import {
  MadLibResponsesState,
  madLibResponsesStore,
} from "./mad-lib-responses.store";
import { Observable } from "rxjs";

export const madLibResponsesQuery = createEntityQuery<MadLibResponsesState>(
  madLibResponsesStore
);

export const getResponseByControlId$ = (
  id: string | undefined
): Observable<string> =>
  madLibResponsesQuery.select((state) => {
    const val = state.responses.filter(
      (response) => response.controlId === id
    )[0];
    console.log(
      "find this val:",
      val,
      "id:",
      id,
      "responses:",
      state.responses
    );
    return val
      ? val.value
        ? val.value
        : "No VAL.Value found"
      : "No VAL found";
  });

export const loading$: Observable<boolean> = madLibResponsesQuery.selectLoading();
