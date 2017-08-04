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
import sheetMusic from './sheet-music.json';
import Form       from './components/Form';
import Sheets     from './components/Sheets';

// console.log( sheetMusic );



/**
 * Get the tags & songs
 */
var allTags        = []; //{};
var allSongs       = [];
var allInstruments = [];

for ( var [ song, data ] of Object.entries( sheetMusic ) ) {

	// add the song
	allSongs = allSongs.concat( song );

	// add the tags
	allTags = allTags.concat( data.tags );
	// data.tags.forEach( function( tag ) {
	// 	allTags[ tag ] = song;
	// });


	// remove tag from the object so we just
	// have instruments
	delete data.tags;
	
	console.log( data );

	// traverse instruments
	for ( var [ instrument, links ] of Object.entries( data ) ) {
		console.log( instrument, links );
		allInstruments = allInstruments.concat( instrument );
	}
	console.log( '-------------------------------------------' );
}

// filter duplicates
allTags        = Array.from( new Set( allTags ) );
allInstruments = Array.from( new Set( allInstruments ) );


// testing
console.log( '====================================================' );
console.log( 'ALL SONGS', allSongs );
console.log( 'ALL TAGS', allTags );
console.log( 'ALL INSTRUMENTS', allInstruments );


/**
 * Main app
 */
class App extends Component {

	// init state
	constructor( props ) {
		super( props );
		
		this.state = {
			instrument : '',
			sheets     : ''
		}
	}


	// update selected instrument and run
	// the sheet grabber
	onInstrumentChange = ( instrument ) => {
		this.setState({ instrument : instrument }, this.getSheets );
	}


	// get the selected instrument's sheets
	getSheets = () => {
		this.setState({ sheets : 'Getting sheets for ' + this.state.instrument });
	}


	// output component
	render() {
		return (
			<main className="App">
				<Form onInstrumentChange={ this.onInstrumentChange } />
				<Sheets instrument={ this.state.instrument } />
			</main>
		);
	}
}


// start the death!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
