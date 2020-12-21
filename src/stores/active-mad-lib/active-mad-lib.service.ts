import { historyMadLibs } from "../../interfaces/history-mad-libs.interface";
import { activeMadLibStore } from "./active-mad-lib.store";

export const setActive = (id: number) => {
  historyMadLibs.forEach((ml) => {
    if (ml.id === id) {
      console.log("setting active with:", ml);
      activeMadLibStore.update((_) => {
        return { ...ml };
      });
    }
  });
};

export const deleteActive = () => {
  activeMadLibStore.reset();
};
