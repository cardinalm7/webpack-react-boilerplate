import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import HeaderNav from '../headerNav';
import LightBox from '../lightBox';

import headerGraphic from '../../assets/header-graphic.png';

import image1 from '../../assets/vis/images/1.jpg';
import image2 from '../../assets/vis/images/2.jpg';
import image3 from '../../assets/vis/images/3.jpg';
import image4 from '../../assets/vis/images/4.jpg';
import image5 from '../../assets/vis/images/5.jpg';
import image6 from '../../assets/vis/images/6.jpg';
import image7 from '../../assets/vis/images/7.jpg';
import image8 from '../../assets/vis/images/8.jpg';
import image9 from '../../assets/vis/images/9.jpg';
import image10 from '../../assets/vis/images/10.jpg';
import image11 from '../../assets/vis/images/11.jpg';
import image12 from '../../assets/vis/images/12.jpg';
import image13 from '../../assets/vis/images/13.jpg';

const VisualDev = ({ navFunc }) => {
  return (
    <div className="container visual-dev">
      <div className="header-graphic">
        <img src={headerGraphic} alt="header-graphic" />
      </div>
      <HeaderNav navFunc={navFunc} />
      <LightBox
        page="vis"
        images={[
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
        ]}
      />
    </div>
  );
};

VisualDev.propTypes = {
  navFunc: PropTypes.func,
};

export default VisualDev;
