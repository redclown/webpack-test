'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo.png';
import './color.less';
import './iconfont.js';

class Search extends React.Component {
  render() {
    return (<div>
      111Search Test ....111.
      <img src={Logo} />
    </div>);
  }
}

ReactDOM.render(
  <Search />,
  document.querySelector('#root')
)