import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Atmosphere from './Atmosphere';
import Button from '../components/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showWorld: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showWorld: !prevState.showWorld,
    }));
  }

  render() {
    const buttonLabel = this.state.showWorld ? 'Hide World' : 'Show world';
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p className="center">
          <Button
            label={buttonLabel}
            onClick={this.handleClick}
          />
        </p>
        <ReactCSSTransitionGroup
          transitionName="world"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          { this.state.showWorld &&
            <Atmosphere />
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
