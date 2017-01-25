import React from 'react';
import '../styles/world/world.css';
import '../styles/world/face.css';
import '../styles/world/enterLeaveTransitions.css';
import '../styles/world/animations.css';

function World(props) {
  const classes = `worldWrapper ${props.class}`;
  return (
    <div className="animationWrapper">
      <div className={classes} >
        <div className="face">
          <div className="l-eye" />
          <div className="r-eye" />
          <div className="mouth" />
        </div>
        <div className="world" />
      </div>
    </div>
  );
}

World.propTypes = {
  class: React.PropTypes.string.isRequired,
};

export default World;
