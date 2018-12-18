import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";


class Menu extends Component {
  static  defaultProps = {
      /*
      menuData: PropTypes.arrayOf(
        PropTypes.shape({
            sectionName: String,
            sectionUrl: String
        })
      ),
      clickHandler: PropTypes.func.isRequired
      */
  }

  render() {
    console.log(this.props);  
    const {menuData} = this.props;
    const menuElements = menuData.map((menuItem, key) => (
        <li key={key}>
            <a href={menuItem.itemPath}>{menuItem.itemName}</a>
        </li>
    ));

    return <ul>
            {menuElements}
        </ul>;
  }
}

Menu.propTypes = {
    menuData: PropTypes.arrayOf(
        PropTypes.shape({
            sectionName: String,
            sectionUrl: String
        })
      ).isRequired,
      clickHandler: PropTypes.func.isRequired    
}

export default Menu;