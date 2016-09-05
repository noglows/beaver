import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Start extends TrackerReact(React.Component){
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <h1>Beaver Game</h1>
        <p>Content will go here</p>
      </div>
    )
  }
}
