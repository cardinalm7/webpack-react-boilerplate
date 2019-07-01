import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Designer from './components/designer';
import VisDev from './components/visual-dev';
import StoryTeller from './components/story-teller';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'designer',
    };
  }

  pageNavigation = e => {
    console.log('e.target.id: ', e.target.id);
    this.setState(
      {
        page: e.target.id,
      },
      () => {
        window.scrollTo(0, 0);
      },
    );
  };

  pageRenderer = () => {
    const { page } = this.state;
    if (page === 'designer') {
      return <Designer navFunc={this.pageNavigation} />;
    }
    if (page === 'visual-dev') {
      return <VisDev navFunc={this.pageNavigation} />;
    }
    if (page === 'story-teller') {
      return <StoryTeller navFunc={this.pageNavigation} />;
    }
  };

  render() {
    return <div className="wrapper">{this.pageRenderer()}</div>;
  }
}

export default hot(App);
