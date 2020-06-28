import React from 'react';
import ReactDom from 'react-dom';
import logo from './images/logo.png';
import './search.less';

class Search extends React.Component {
    render() {
        return <div className="search-color">
            ssss<img src={logo} />1111
        </div>
    }
}

ReactDom.render(<Search></Search>, document.querySelector('#root'));