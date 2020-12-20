import { MadLibResponse } from "../../interfaces/mad-lib-response.interface";
import { madLibResponsesStore } from "./mad-lib-responses.store";

export const updateMadLibResponse = (newResponse: MadLibResponse) => {
    console.log("ADD THIS RESPONSE:", newResponse);
    madLibResponsesStore.update(old => {
        const newResponses = [...old.responses];
        if (old.responses.length === 0) {
           newResponses.push(newResponse);
        } else {
            newResponses.forEach(response => {
                if (response.controlId === newResponse.controlId) {
                    const index = newResponses.indexOf(response);
                    newResponses.splice(index, 1, newResponse);
                } else {
                    newResponses.push(newResponse);
                }
            });
        }
        return {responses:[...newResponses]};
    });
};

export const resetResponses = () => madLibResponsesStore.reset();
