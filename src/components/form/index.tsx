import React from "react";

interface Props {
  text: string;
  age?: number;
}

interface State {
  name: string;
  email: string;
}

class NewHighlightForm extends React.Component<Props, State> {
  public state: State = {
    name: "",
    email: ""
  };
  public render() {
    const { text } = this.props;
    const { name, email } = this.state;
    return (
      <form>
        hello I'm a form <div>{text}</div>
      </form>
    );
  }
}

export default NewHighlightForm;
