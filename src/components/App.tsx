import * as React from "react";

class App extends React.Component {

    clickHandler(): void {
        console.log('123');
    }

    render(): JSX.Element {
        return (
            <div onClick={this.clickHandler}>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;
