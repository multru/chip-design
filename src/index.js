import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {siteContent} from './data/data';
import Menu from './components/Menu';
import Rotator from './components/Rotator';


ReactDOM.render(<Menu menuData = {siteContent.menu}/>, document.querySelector('.header-menu'));
ReactDOM.render(<Rotator RotatorData = {siteContent.headerBanners}/>, document.querySelector('.header-gallery'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
