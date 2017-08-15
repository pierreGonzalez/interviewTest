import React from 'react';

export default class TipsAndBlogs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jouer: false,
      login: false
    }
  }

  render () {

    return (
      <div>
        <p>Tips and blogs page</p>
      </div>
    );
  }
}
