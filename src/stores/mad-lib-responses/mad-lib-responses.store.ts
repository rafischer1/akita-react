import { HistoryMadLib } from "../../interfaces/history-mad-libs.interface";
import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { createEntityStore } from "@datorama/akita";

export interface MadLibResponsesState {
    responses: MadLibResponse[]
}

export function createInitialState(): MadLibResponsesState {
    return { responses: [] };
}

export const madLibResponsesStore = createEntityStore<MadLibResponsesState>(createInitialState(), {name: "madLibResponses"});
