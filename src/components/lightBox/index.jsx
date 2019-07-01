import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class lightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      index: 0,
    };
  }

  incrementIndex = () => {
    const { images } = this.props;
    const { index } = this.state;
    this.setState({ index: (index + 1) % images.length });
  };

  render() {
    const { active, index } = this.state;
    const { images, page } = this.props;
    return (
      <>
        {active ? (
          <div
            className="lightbox-container"
            onClick={() => {
              this.setState({ active: false });
            }}
          >
            <div className="lightbox" id="slideShow">
              <img
                className="lightbox-image"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.setState({ active: true }, () => {
                    this.incrementIndex();
                  });
                }}
                src={images[index]}
              />
            </div>
          </div>
        ) : null}
        <div className={`${page}-images`}>
          {images.map((image, index) => {
            return (
              <img
                className={`image image-${index + 1}`}
                key={`slide-${index + 1}`}
                src={image}
                onClick={() => {
                  this.setState({ index, active: true });
                }}
              />
            );
          })}
        </div>
      </>
    );
  }
}

lightBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
  type: PropTypes.string
};

export default lightBox;
