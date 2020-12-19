import React from "react";
import {  historyMadLibs } from "../../interfaces/history-mad-libs.interface";
import { setActive } from "../../stores/active-mad-lib/active-mad-lib.service";

export class MadLibSelect extends React.Component<Record<string, never>, number> {
    constructor(props: any) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange(event: any): any {
        const { value }: any = event.target;
        setActive(+value);
        event.preventDefault();
    }


    render() {
        return (
            <label>Select Title:
                <select onChange={this.handleStateChange}>
                    <option>Select ad-lib...</option>
                    {historyMadLibs.map((madlib, i )=>
                        <option key={i} value={madlib.id}>{madlib.title}</option>)}
                </select>
            </label>
        );
    }
}
