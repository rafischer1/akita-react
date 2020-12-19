import { HistoryMadLib } from "../../interfaces/history-mad-libs.interface";
import { activeMadLibStore } from "./active-mad-lib.store";
// @ts-ignore
import { createEntityQuery } from "@datorama/akita";

export const activeMadLibQuery = createEntityQuery<HistoryMadLib>(activeMadLibStore);

export const getActiveMadLib$ = activeMadLibQuery.select();
