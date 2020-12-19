import { HistoryMadLib } from "../../interfaces/history-mad-libs.interface";
import { activeMadLibStore } from "./active-mad-lib.store";

export const setActive = (newMadLib: HistoryMadLib) => {
     activeMadLibStore.setActive(newMadLib);
};

export const deleteActive = () => {
     activeMadLibStore.destroy();
};
