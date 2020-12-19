import React from "react";
import {  getActiveMadLib$ } from "../../../stores/active-mad-lib/active-mad-lib.query";
import { MadLibControl } from "../../../interfaces/history-mad-libs.interface";
import "./MadLibControls.css";


export class MadLibControls extends React.Component<Record<string, never>, { controls:MadLibControl[]}> {
    constructor(props: {} | MadLibControl[]) {
        // @ts-ignore
        super(props);
        this.state = {controls: []};
    }
    componentDidMount() {
        getActiveMadLib$.subscribe(active => {
            this.setState({ controls: active.controls });
        }).unsubscribe();
    }


    render() {
        return <div className="controls-display">{this.state.controls?.map((c, i) => {
            if (c.type === "select") {
                return <label key={i}>{c.label}:<select>
                    <option>Select option...</option>
                    {c?.valueSet?.map((v, x) =>
                        <option key={x}>{v}</option> )}</select></label>;
            } else {
                return <label key={i}>{c.label}<input  type={c.type} /></label>;
            }

        })}</div>;
    }

}
