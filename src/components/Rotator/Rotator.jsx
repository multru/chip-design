import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";

import Rotator from 'react-rotator';

class RotatorWrap extends Component {
  static  defaultProps = {
    RotatorData: []
  }

  render() {
    console.log(this.props);  
    const {RotatorData} = this.props;
    const rotatorElements = RotatorData.map((item, key) => (
        <img key={key} src={item.imageUrl} alt={item.imageAlt}></img>
    ));

    return <Rotator>
        {rotatorElements}
    </Rotator>;
  }
}

RotatorWrap.propTypes = {
    RotatorData: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: String,
            imageAlt: String
        })
      ).isRequired,
      clickHandler: PropTypes.func.isRequired    
}

export default RotatorWrap;