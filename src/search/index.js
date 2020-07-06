'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo.png';
import add from '../common/add';
import './color.less';
import './iconfont.js';

class Search extends React.Component {
  render() {
    add();
    return (<div>
      222222 2223 3333 iiii.
      <img src={Logo} />
    </div>);
  }
}

ReactDOM.render(
  <Search />,
  document.querySelector('#root')
)