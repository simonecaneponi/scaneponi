import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Prova, NameForm, Footer, Forth, Fifth, Sixth, Seventh} from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './fade.css';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Prova />, document.getElementById('body1'));
ReactDOM.render(<NameForm />, document.getElementById('body2'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Forth />, document.getElementById('body4'));
ReactDOM.render(<Fifth />, document.getElementById('body5'));
ReactDOM.render(<Sixth />, document.getElementById('body6'));
ReactDOM.render(<Seventh />, document.getElementById('body7'));
//registerServiceWorker();
// <form onSubmit={this.sottomissione}>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.cambiamento}  style={divStyle} />
//                 <Button bsStyle="primary" type="submit">Iniva Rihiesta</Button>
//                 <h1> {this.state.value} </h1>
//             </form>
