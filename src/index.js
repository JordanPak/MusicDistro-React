// libs
import React from 'react';
import ReactDOM from 'react-dom';

// service worker
import registerServiceWorker from './registerServiceWorker';

// assets
import logo from './images/logo.svg';
import './css/App.css';


const App = () => (
	<div className="App">

		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to React</h2>
		</div>
		
		<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	</div>
);


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
