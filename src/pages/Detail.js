import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
  buttonClicked(){
    this.forceUpdate();
  }

  render() {
    return (<div>
      <p>Hello, {chance.first()}!</p>
      <p>You're from {chance.county({full: true})}.</p>
      <button onClick={this.buttonClicked.bind(this)}>Meet someone new</button>
    </div>);
  }
}

export default Detail;
