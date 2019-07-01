import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import HeaderNav from '../headerNav';
import SlideShow from './slideshow';

import headerGraphic from '../../assets/header-graphic.png';
import laGraphic from '../../assets/home/LA.png';
import bodyText from '../../assets/home/body-text.png';
import emailGraphic from '../../assets/home/email.png';
import sketchText from '../../assets/home/sketch-slide-show.png';
import visualDevelopMentGraphic from '../../assets/home/visual-development-graphic.png';
import worldOfEnGraphic from '../../assets/home/world-of-en-graphic.png';
import westHollywood from '../../assets/home/west-hollywood-footer.png';

const Designer = ({ navFunc }) => {
  return (
    <div className="container designer">
      <div className="header-graphic">
        <img src={headerGraphic} alt="header-graphic" />
      </div>
      <HeaderNav navFunc={navFunc} />
      <div className="la-graphic">
        <img src={laGraphic} alt="LA" />
      </div>
      <div className="designer-body-text">
        <img src={bodyText} alt="body-text" />
      </div>
      <div
        className="contact-email"
        type="button"
        id="email"
        onClick={() => {
          window.location = 'mailto:olivier.tossan@gmx.net';
        }}
      >
        <img src={emailGraphic} alt="email olivier" />
      </div>
      <div className="sketch-slide-show-text">
        <img src={sketchText} alt="sketch slide show" />
      </div>
      <SlideShow />
      <div
        className="visual-development-graphic"
        type="button"
        onClick={navFunc}
        id="visual-dev"
      >
        <img
          src={visualDevelopMentGraphic}
          alt="visual-development"
          id="visual-dev"
        />
      </div>
      <div
        className="world-of-en-graphic"
        type="button"
        onClick={navFunc}
        id="story-teller"
      >
        <img src={worldOfEnGraphic} alt="story-teller" id="story-teller" />
      </div>
      <div className="west-hollywood">
        <img src={westHollywood} alt="West Hollywood" />
      </div>
    </div>
  );
};

Designer.propTypes = {
  navFunc: PropTypes.func,
};

export default Designer;
