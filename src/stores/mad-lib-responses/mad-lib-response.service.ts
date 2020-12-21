import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { madLibResponsesStore } from "./mad-lib-responses.store";

export const updateMadLibResponse = (newResponse: MadLibResponse) => {
  madLibResponsesStore.update((old) => {
    let newResponses = [...old.responses];
    if (old.responses.length === 0) {
      newResponses.push(newResponse);
    } else {
      old.responses.map((response) => {
        if (response.controlId === newResponse.controlId) {
          const index = newResponses.indexOf(response);
          newResponses[index] = newResponse;
        } else {
          newResponses.push(newResponse);
        }
      });
    }
    return { responses: [...newResponses] };
  });
};

export const resetResponses = () => madLibResponsesStore.reset();
