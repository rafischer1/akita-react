import { activeMadLibStore } from "./active-mad-lib.store";
import { historyMadLibs } from "../../../../constants/mad-libs.config";

export const setActive = (id: number) => {
  historyMadLibs.forEach((ml) => {
    if (ml.id === id) {
      activeMadLibStore.update(() => {
        return { ...ml };
      });
    }
  });
};

export const deleteActive = () => {
  activeMadLibStore.reset();
};
