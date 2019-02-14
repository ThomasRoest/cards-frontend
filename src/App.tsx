import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Card = ({ message }: { message: string }) => <div>{message}</div>;

interface MyState {
  count: number;
  name: string;
}
class App extends Component<{}, MyState> {
  public state = {
    count: 0,
    name: "thomas"
  };

  private handleClick = () => {
    this.setState({ count: this.state.count + 2 });
  };

  public handleReverse = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    const reversed = this.state.name.toLocaleUpperCase();
    this.setState({ name: reversed });
  };

  private increment = (num: number) => {
    this.setState(state => ({
      count: state.count + num
    }));
  };

  public render() {
    const name: string = "thomas";

    const name2: boolean = true;

    return (
      <div className="App">
        <button onClick={this.handleClick}>click me</button>
        <input type="text" value={this.state.count} />
        <button onClick={e => this.increment(1)}>typescript and stuff</button>
        <Card message={"string"} />

        <div>
          <button onClick={e => this.handleReverse(e)}>
            uppercase me{this.state.name}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
