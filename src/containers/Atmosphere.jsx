import React, { Component } from 'react';
import World from '../components/World';
import Button from '../components/Button';

class Atmosphere extends Component {

  constructor(props) {
    super(props);
    this.state = { daytime: true };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    if (value === 'day') {
      this.setState({ daytime: true });
    } else {
      this.setState({ daytime: false });
    }
  }

  render() {
    const worldClass = this.state.daytime ? '' : 'night';
    const nightime = !this.state.daytime;
    return (
      <div className="center">
        <World class={worldClass} />
        <div>
          <Button
            label="Make it daytime"
            value="day"
            onClick={this.handleButtonClick}
            disabled={this.state.daytime}
          />
          <Button
            label="Make it nightime"
            value="night"
            onClick={this.handleButtonClick}
            disabled={nightime}
          />
        </div>
      </div>
    );
  }
}

export default Atmosphere;
