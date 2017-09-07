import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      mode: 'commits',
      commits: [],
      forks: [],
      pulls: []
    };
  }

  componentWillMount() {
      ajax.get('https://api.github.com/repos/facebook/react/commits')
          .end((error, response) => {
              if (!error && response) {
                  this.setState({ commits: response.body });
              } else {
                  console.log('There was an error fetching from GitHub', error);
              }
          }
      );

      ajax.get('https://api.github.com/repos/facebook/react/forks')
          .end((error, response) => {
              if (!error && response) {
                  this.setState({ commits: response.body });
              } else {
                  console.log('There was an error fetching from GitHub', error);
              }
          }
      );

      ajax.get('https://api.github.com/repos/facebook/react/pulls')
          .end((error, response) => {
              if (!error && response) {
                  this.setState({ commits: response.body });
              } else {
                  console.log('There was an error fetching from GitHub', error);
              }
          }
      );
  }

  renderCommits() {
    return this.state.commits.map((commit, index) => {
      const author = commit.author? commit.author.login : 'Anonymous';

      return(<p key={index}>
        <strong>{author}</strong>:
        <a href={commit.html_url}>{commit.commit.message}</a>).
      </p>
    })}

    renderForks() {
      return this.state.forks.map((fork, index) => {
        const owner = fork.owner ? fork.owner.login : 'Anonymous';

        return(<p key={index}>
          <strong>{owner}</strong>: forked to
          <a href={fork.html_url}>{fork.html_url}</a>) at {fork.create_at}.
        </p>
      })}

      renderPulls() {
        return this.state.pulls.map((pull, index) => {
          const user = pull.user ? pull.user.login : 'Anonymous';

          return(<p key={index}>
            <strong>{user}</strong>:
            <a href={pull.html_url}>{pull.body}</a>).
          </p>
        })}


  render() {
      return (<div>
      {this.state.commits.map((commit, index) => {
          const author = commit.author ? commit.author.login : 'Anonymous';

          return (<p key={index}>
              <strong>{author}</strong>:
              <a href={commit.html_url}>{commit.commit.message}</a>.
          </p>);
      })}
      </div>);
  }
}

export default Detail;
