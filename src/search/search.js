import React from 'react';
import ReactDom from 'react-dom';
import logo from './images/logo.png';
import './search.less';

class Search1 extends React.Component {
    render() {
        return <div className="search-color">
            2222 <img src={logo} />1111
        </div>
    }
}

console.log(2222)

ReactDom.render(
    <Search1 />, 
    document.querySelector('#root')
);