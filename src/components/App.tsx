import * as React from "react";

class App extends React.Component {

    clickHandler(data: string): void {
        const msg: string = data;
    }

    render(): JSX.Element {
        return (
            <div onClick={() => this.clickHandler("Invoke clickHandler")}>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;
