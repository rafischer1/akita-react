import { MadLibResponse } from "../../../../interfaces/mad-lib-response.interface";
import { madLibResponsesStore } from "./mad-lib-responses.store";

export const updateMadLibResponse = (newResponse: MadLibResponse) => {
  madLibResponsesStore.update((state) => {
    const old = [...state.responses];
    const found = old.find((r) => r.controlId === newResponse.controlId);
    if (found) {
      old.splice(old.indexOf(found), 1);
    }
    return { responses: [...old, newResponse] };
  });
};

export const resetResponses = () => madLibResponsesStore.reset();
