import React, { Component } from 'react';
import './style.scss';

import slide1 from '../../../assets/home/slideshow/1.jpg';
import slide2 from '../../../assets/home/slideshow/2.jpg';
import slide3 from '../../../assets/home/slideshow/3.jpg';
import slide4 from '../../../assets/home/slideshow/4.jpg';
import slide5 from '../../../assets/home/slideshow/5.jpg';
import slide6 from '../../../assets/home/slideshow/6.jpg';
import slide7 from '../../../assets/home/slideshow/7.jpg';
import slide8 from '../../../assets/home/slideshow/8.jpg';
import slide9 from '../../../assets/home/slideshow/9.jpg';
import slide10 from '../../../assets/home/slideshow/10.jpg';
import slide11 from '../../../assets/home/slideshow/11.jpg';
import slide12 from '../../../assets/home/slideshow/12.jpg';
import slide13 from '../../../assets/home/slideshow/13.jpg';
import pausePlay from '../../../assets/home/pause-play.png';

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      index: 0,
      index2: -1,
      step: 0,
    };

    this.slideSources = [
      slide1,
      slide2,
      slide3,
      slide4,
      slide5,
      slide6,
      slide7,
      slide8,
      slide9,
      slide10,
      slide11,
      slide12,
      slide13,
    ];

    this.interval = null;
    this.interval2 = null;
  }

  incrementIndex = () => {
    const { play } = this.state;
    if (play) {
      // step 0 - image 2 index goes up by 2
      // step 1 - image 1 fades away
      // step 2 - image 1 index goes up by 2
      // step 3 - image 1 fades in, go to step 0
      this.interval = setInterval(() => {
        const { index, index2, step } = this.state;
        switch (step) {
          case 0:
            this.setState({
              index2: (index2 + 2) % this.slideSources.length,
              step: step + 1,
            });
            break;
          case 1:
            this.setState({
              step: step + 1,
            });
            break;
          case 2:
            this.setState({
              index: (index + 2) % this.slideSources.length,
              step: step + 1,
            });
            break;
          case 3:
            this.setState({
              step: 0,
            });
            break;
          default:
            break;
        }
      }, 1500);
    } else {
      clearInterval(this.interval);
    }
  };

  render() {
    const { play, index, index2, step } = this.state;
    return (
      <div className="sketch-slide-container">
        <div className="sketch-shadow">
          <div
            className="sketch-images"
            id="slideShow"
            onClick={() => {
              this.setState({ play: !play }, () => {
                this.incrementIndex();
              });
            }}
          >
            {!play ? (
              <img className="pause-play" src={pausePlay} id="play" />
            ) : null}
            <img
              className={`active-slide ${play ? 'fadeOut' : ''} ${
                step === 1 || step === 2 ? 'fade' : ''
              }`}
              src={this.slideSources[index]}
              id="active"
            />
            <img
              className="next-slide"
              src={
                this.slideSources[
                  ((index2 % this.slideSources.length) +
                    this.slideSources.length) %
                    this.slideSources.length
                ]
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

SlideShow.propTypes = {};

export default SlideShow;
