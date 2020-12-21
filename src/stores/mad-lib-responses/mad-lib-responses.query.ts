import { createEntityQuery } from "@datorama/akita";
import {
  MadLibResponsesState,
  madLibResponsesStore,
} from "./mad-lib-responses.store";
import { Observable } from "rxjs";

export const madLibResponsesQuery = createEntityQuery<MadLibResponsesState>(
  madLibResponsesStore
);

export const getResponseByControlId$ = (id: string): Observable<string> =>
  madLibResponsesQuery.select((state) => {
    const val = state.responses.filter(
      (response) => response.controlId === id
    )[0];
    return val ? (val.value ? val.value : "") : "";
  });

export const loading$: Observable<boolean> = madLibResponsesQuery.selectLoading();
