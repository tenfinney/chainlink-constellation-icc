import React, { Component } from 'react';

class ImageSwapOnHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { src, alt, hoverSrc } = this.props;
    const { isHovered } = this.state;

    return (
      <img
        src={isHovered ? hoverSrc : src}
        alt={alt}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

export default ImageSwapOnHover;
