// libs
import React, { Component } from 'react';
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
class App extends Component {

	// init state
	constructor( props ) {
		super( props );
		this.state = {
			instrument : ''
		}
	}

	// update selected instrument
	onInstrumentChange = ( instrument ) => {
		this.setState({ instrument : instrument });
	}


	// output component
	render() {
		return (
			<main className="App">
				<Form instruments={ instruments }
					onInstrumentChange={ this.onInstrumentChange } />
				<Sheets />
			</main>
		);
	}
}


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
