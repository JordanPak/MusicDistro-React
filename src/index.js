// libs
import React from 'react';
import ReactDOM from 'react-dom';

// service worker
import registerServiceWorker from './registerServiceWorker';

// components
import Form   from './components/Form';
import Sheets from './components/Sheets';

// assets
// import logo from './images/logo.svg';
import 'typeface-oswald';
import 'typeface-open-sans';
import 'font-awesome/css/font-awesome.css';
import './css/App.css';



/**
 * List of instruments
 */
var instruments = [
	{
		key   : 'piccolo',
		label : 'Piccolo'
	},
	{
		key   : 'clarinet',
		label : 'Clarinet'
	},
	{
		key   : 'alto-sax',
		label : 'Alto Sax'
	},
	{
		key   : 'tenor-sax',
		label : 'Tenor Sax'
	},
	{
		key   : 'trumpet',
		label : 'Trumpet'
	},
	{
		key   : 'mellophone',
		label : 'Mellophone'
	}
];


/**
 * Main app
 */
const App = () => (
	<main className="App">
		<Form instruments={ instruments } />
		<Sheets />
	</main>

	// 	<div className="App-header">
	// 		<img src={logo} className="App-logo" alt="logo" />
	// 		<h2>Welcome to React</h2>
	// 	</div>
);


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
