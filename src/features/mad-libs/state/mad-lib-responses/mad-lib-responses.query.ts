import { createEntityQuery } from "@datorama/akita";
import {
  MadLibResponsesState,
  madLibResponsesStore,
} from "./mad-lib-responses.store";
import { Observable } from "rxjs";
import { MadLibResponse } from "../../../../interfaces/mad-lib-response.interface";

export const madLibResponsesQuery = createEntityQuery<MadLibResponsesState>(
  madLibResponsesStore
);

export const getResponseByControlId$ = (
  id: string
): Observable<MadLibResponse> =>
  madLibResponsesQuery.select((state) => {
    const val = state.responses.filter(
      (response) => response.controlId === id
    )[0];
    return val || {};
  });

export const getAllResponses$ = madLibResponsesQuery.select(
  (state) => state.responses
);

export const loading$: Observable<boolean> = madLibResponsesQuery.selectLoading();
