import React from "react";
import { HistoryMadLib } from "../../interfaces/history-mad-libs.interface";
import { sessionStore } from "../../stores/session-state/session-state.store";
import { setActive } from "../../stores/active-mad-lib/active-mad-lib.service";

export class MadLibSelect extends React.Component<Record<string, never>, HistoryMadLib> {
    constructor(props: any) {
        super(props);
        this.state = { categories: [], id: 0, title: "" };
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStateChange(event: any): any {
        const { value }: any = event.target;
        this.setState({ ...value });
    }

    handleSubmit(event: any): any {
        setActive({...this.state});
        event.preventDefault();
    }
}
