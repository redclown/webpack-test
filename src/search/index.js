import React from 'react';
import ReactDom from 'react-dom';
import logo from './images/logo.png';
import './search.less';
import '../../common';
import { a } from './tree-shaking';

class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }

    // loadComponent = () => {
    //     import('./text').then((Text) => {
    //         console.log('Text', Text);
    //         this.setState({
    //             Text: Text.default
    //         })
    //     })
    // }

    render() {
        // let a = 1;
        let aa = a();
       
        return <div className="search-color">
           
            33333 <img src={logo} /> 33333
        </div>
    }
}

ReactDom.render(
    <Search />, 
    document.querySelector('#root')
);