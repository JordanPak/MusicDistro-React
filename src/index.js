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
				<Form onInstrumentChange={ this.onInstrumentChange } />
				<Sheets />
			</main>
		);
	}
}


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
