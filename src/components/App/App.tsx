import * as React from "react";
import { IApp } from "./index";

class App extends React.Component<IApp, {}> {
    componentDidMount(): void {
        this.props.fetchData();
    }

    render(): JSX.Element {
        return (
            <h1>My React App!</h1>
        );
    }
}

export default App;
