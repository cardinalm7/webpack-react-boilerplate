import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import designerNav from '../../assets/nav/designer.png';
import visDevNav from '../../assets/nav/visual-dev-artist.png';
import storyTellNav from '../../assets/nav/story-teller.png';

const HeaderNav = ({ navFunc }) => {
  return (
    <div className="header-nav">
      <div
        className="designer-nav"
        type="button"
        onClick={navFunc}
        id="designer"
      >
        <img src={designerNav} alt="designer" id="designer" />
      </div>
      <div
        className="vis-dev-nav"
        type="button"
        onClick={navFunc}
        id="visual-dev"
      >
        <img src={visDevNav} alt="visual-development" id="visual-dev" />
      </div>
      <div
        className="story-teller-nav"
        type="button"
        onClick={navFunc}
        id="story-teller"
      >
        <img src={storyTellNav} alt="story-teller" id="story-teller" />
      </div>
    </div>
  );
};

HeaderNav.propTypes = {
  title: PropTypes.string,
};

export default HeaderNav;
