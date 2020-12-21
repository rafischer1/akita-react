import React from "react";
import { sessionStore } from "../../stores/session-state/session-state.store";
import "./Form.css";
import { usStatesInterface } from "../../interfaces/us-states.interface";
import { SessionState } from "../../interfaces/session-state.interface";

export class Form extends React.Component<Record<string, never>, SessionState> {
    constructor(props: any) {
        super(props);
        this.state = {name:"", city: "", state: ""};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event: any): any {
        const { value }: any = event.target;
        this.setState({name: value});
    }

    handleCityChange(event: any): any {
        const { value }: any = event.target;
        this.setState({city: value});
    }

    handleStateChange(event: any): any {
        const { value }: any = event.target;
        this.setState({state: value});
    }

    handleSubmit(event: any): any {
        sessionStore.update((_) => {
            return { name: this.state.name, state: this.state.state, city: this.state.city };
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="session-container">
                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>City:
                        <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                    </label>
                    <label>State:
                        <select value={this.state.state} onChange={this.handleStateChange}>
                            <option>Select state...</option>
                           {usStatesInterface.map((s, i )=> <option key={i} value={s.abbr}>{s.name}</option>)}
                        </select>
                    </label>
                    <input type="submit" className="btn" value="Submit" />
                </form>
            </div>
        );
    }
}


