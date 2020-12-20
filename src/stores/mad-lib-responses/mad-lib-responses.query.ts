import { createEntityQuery } from "@datorama/akita";
import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { MadLibResponsesState, madLibResponsesStore } from "./mad-lib-responses.store";
import { Observable } from "rxjs";

export const madLibResponsesQuery = createEntityQuery<MadLibResponsesState>(madLibResponsesStore);

export const getResponseByControlId$ = (id: number): Observable<string> => madLibResponsesQuery.select(state => {
    const val = state.responses.filter(response => response.controlId === id)[0];
    console.log("find this val:", val, "id:", id, "responses:", state.responses);
    return val ? val.value ? val.value : "No Res 1" : "No Res 2";
});
