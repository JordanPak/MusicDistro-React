/**
 * Main MusicDistro application
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// service worker
import registerServiceWorker from './registerServiceWorker';

// assets & components
import './assets';
import sheetData from './sheetData';
import Form      from './components/Form';
import Sheets    from './components/Sheets';


/**
 * Main app
 */
class App extends Component {

	/**
	 * Init state
	 */
	constructor( props ) {
		super( props );
		this.state = { instrument : '', }
	}


	/**
	 * Update selected instrument
	 */
	onInstrumentChange = ( instrument ) => {
		this.setState({ instrument : instrument });
	}


	/**
	 * Slaughter
	 */
	render() {
		return (
			<main className="App">
				<Form instruments={ sheetData.instruments }
				      onInstrumentChange={ this.onInstrumentChange } />

				<Sheets instrument={ this.state.instrument }
				        tags={ sheetData.tags }
				        arrangements={ sheetData.arrangements } />
			</main>
		);
	}
}


/**
 * Gametime
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
