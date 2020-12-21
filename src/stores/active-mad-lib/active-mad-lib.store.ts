import { createEntityStore } from "@datorama/akita";
import { HistoryMadLib } from "../../interfaces/history-mad-libs.interface";

export function createInitialState(): HistoryMadLib {
    return {
        categories: [],
        id: 0,
        title: "",
        controls: [],
        template: []
    };
}

export const activeMadLibStore = createEntityStore<HistoryMadLib>(createInitialState(), {name: "activeMadLib"});
