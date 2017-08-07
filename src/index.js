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

	// init state
	constructor( props ) {
		super( props );
		
		this.state = {
			instrument : '',
			// sheets     : ''
		}
	}


	// update selected instrument and run
	// the sheet grabber
	onInstrumentChange = ( instrument ) => {
		this.setState({ instrument : instrument } ); //, this.getSheets );
	}


	// get the selected instrument's sheets
	// getSheets = () => {
	// 	this.setState({ sheets : 'Getting sheets for ' + this.state.instrument });
	// }


	// output component
	render() {
		
		console.log( 'RENDERING!' );

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


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
