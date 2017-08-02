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
			instrument : '',
			sheets     : 'Chicken'
		}
	}

	// update selected instrument and run
	// the sheet grabber
	onInstrumentChange = ( instrument ) => {
		this.setState({ instrument : instrument }, this.getSheets );
	}


	// get the selected instrument's sheets
	getSheets = () => {
		this.setState({
			sheets : 'Getting sheets for ' + this.state.instrument.label
		});
	}


	// output component
	render() {
		return (
			<main className="App">
				<Form onInstrumentChange={ this.onInstrumentChange } />

				{/* Testing */}
				<h3>{ this.state.sheets }</h3>

				<Sheets />
			</main>
		);
	}
}


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
