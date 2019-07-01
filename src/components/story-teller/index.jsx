import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import HeaderNav from '../headerNav';
import LightBox from '../lightBox';

import headerGraphic from '../../assets/header-graphic.png';
import worldOfEnGraphic from '../../assets/home/world-of-en-graphic.png';
import storyTop from '../../assets/story/story-top-text.png';
import storyMiddle from '../../assets/story/story-middle-text.png';
import storyBottom from '../../assets/story/story-bottom-text.png';

import image3 from '../../assets/story/images/3.jpg';
import image4 from '../../assets/story/images/4.jpg';
import image5 from '../../assets/story/images/5.jpg';
import image6 from '../../assets/story/images/6.jpg';
import image7 from '../../assets/story/images/7.jpg';

const StoryTeller = ({ navFunc }) => {
  return (
    <div className="container story-teller">
      <div className="header-graphic">
        <img src={headerGraphic} alt="header-graphic" />
      </div>
      <HeaderNav navFunc={navFunc} />
      <div className="world-of-en-graphic">
        <img src={worldOfEnGraphic} alt="story-teller" />
      </div>
      <div className="story-slide-container"></div>
      <div className="story-top-text">
        <img src={storyTop} alt="upper text" />
      </div>
      <div
        className="story-middle-text"
        type="button"
        id="enmovie"
        role="button"
        focusIndex={-1}
        onClick={() => {
          window.location = 'http://enmovie.us';
        }}
      >
        <img src={storyMiddle} alt="middle text" />
      </div>
      <div className="story-bottom-text">
        <img src={storyBottom} alt="bottom text" />
      </div>
      <LightBox
        page="story"
        images={[image3, image4, image5, image6, image7]}
      />
    </div>
  );
};

StoryTeller.propTypes = {
  navFunc: PropTypes.func,
};

export default StoryTeller;
