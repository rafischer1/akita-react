import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { madLibResponsesStore } from "./mad-lib-responses.store";

export const updateMadLibResponse = (newResponse: MadLibResponse) => {
    console.log("ADD THIS RESPONSE:", newResponse);
    madLibResponsesStore.update(old => {
        return old.responses.forEach(oldResponse => {
            if (oldResponse.controlId === newResponse.controlId) {
                const index = old.responses.indexOf(oldResponse);
                old.responses[index] = newResponse;
            } else {
                old.responses.push(newResponse);
            }
        });
    });
};
