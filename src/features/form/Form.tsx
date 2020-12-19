import React from "react";
import { sessionStore } from "../../stores/session-state/session-state.store";

export class Form extends React.Component<Record<string, never>, { name: string, city: string, state: string }> {
    constructor(props: any) {
        super(props);
        this.state = {name: "", city: "", state: ""};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event: any): any {
        const { value }: any = event.target;
        console.log("state value:", value);
        this.setState({name: value});
    }

    handleCityChange(event: any): any {
        const { value }: any = event.target;
        console.log("state value:", value);
        this.setState({city: value});
    }

    handleStateChange(event: any): any {
        const { value }: any = event.target;
        console.log("state value:", value);
        this.setState({state: value});
    }

    handleSubmit(event: any): any {
        sessionStore.update((_) => {
            return {name: this.state.name, state: this.state.state, city: this.state.city};
        });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>City:
                        <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                    </label>
                    <label>State:
                        <input type="text" value={this.state.state} onChange={this.handleStateChange} />
                    </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
