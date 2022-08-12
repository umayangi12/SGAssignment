import React from "react";

export default class admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
  }
  toggleIsShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

  render() {
    const { isShown } = this.state;
    return (
      <div>
        <button onClick={this.toggleIsShown}>Toggle</button>
        {isShown && <div>Text goes here</div>}
      </div>
    );
  }
}
