import { createEntityQuery } from "@datorama/akita";
import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { MadLibResponsesState, madLibResponsesStore } from "./mad-lib-responses.store";
import { Observable } from "rxjs";

export const madLibResponsesQuery = createEntityQuery<MadLibResponsesState>(madLibResponsesStore);

export const getResponseByControlId$ = (id: number): Observable<MadLibResponse> => madLibResponsesQuery.select(state => {
    return state.responses.filter(response => response.controlId === id)[0];
});
