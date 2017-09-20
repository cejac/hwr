import React from 'react';
import ajax from 'superagent';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentWillMount() {
    ajax.get('https://api.github.com/users/${this.props.params.user}/events');
      .end((error, response) => {
        if(!error && response) {
          this.setState({events: response.body});
        } else {
          console.log('Error fetching user data', error);
        }
      });
  }

  render() {
    return(<div>
      <p>Content for {this.props.params.user} to go here.</p>
    </div>)
  }

}

export default User;
