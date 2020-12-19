import React from "react";
import { sessionStore } from "../../stores/session-state/session-state.store";

export class Form extends React.Component<Record<string, never>, { value: string }> {
    constructor(props: any) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any): any {
        const { value }: any = event.target;
        console.log("state value:", value);
        this.setState({value});
    }

    handleSubmit(event: any): any {
        sessionStore.update((_) => {
            console.log("state value:", this.state.value);
            return {name: this.state.value};
        });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
