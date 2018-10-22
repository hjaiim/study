// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';


//引入css
// import './main.css';
import './test.scss';

render(<Greeter />, document.getElementById('root'));
