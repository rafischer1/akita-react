import { historyMadLibs } from "../../interfaces/history-mad-libs.interface";
import { activeMadLibStore } from "./active-mad-lib.store";

export const setActive = (id: number) => {
  historyMadLibs.forEach((ml) => {
    if (ml.id === id) {
      activeMadLibStore.update((_) => {
        return { ...ml };
      });
    }
  });
};

export const deleteActive = () => {
  activeMadLibStore.reset();
};
