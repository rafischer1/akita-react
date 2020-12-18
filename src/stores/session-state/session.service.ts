import { SessionStore } from './session-state.store';

export class SessionService {
    constructor(private sessionStore: SessionStore) {}

    async updateUserName(newName: string) {
        try {
            await this.sessionStore.updateName(newName);
        } catch(error) {
            this.sessionStore.setError(error);
        }
    }
}
