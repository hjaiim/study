// var config = require('./config.json')

import React,{Component} from 'react'
import config from './config.json';

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "要成为码影的男人";
//   return greet;
// };


class Greeter extends Component{
  render() {
    return (
        <div>
            {config.test}
        </div>
  );
  }
}

export default Greeter