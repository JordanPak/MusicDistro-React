/**
 * Get sheet tags / data from store
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// get sheet music
import sheetMusic from './sheet-music.json';

/**
 * Tag / instrument store
 */
var allTags        = []; //{};
var allInstruments = [];
// var allSongs       = [];


/**
 * Get tag from arrangement
 * 
 * Get the tag from the arrangement and either
 * add or initialize + add to the main tag list
 * 
 * @param string  tag  An arrangement name
 */
function setTag( tag ) {
	
	if ( ! allTags[ tag ] ) {
		allTags[ tag ] = [ song ];
	}
	
	else {
		allTags[ tag ].push( song );
	}
}



for ( var [ song, data ] of Object.entries( sheetMusic ) ) {

	// add the song
	// allSongs = allSongs.concat( song );


	// loop through tags and add the
	// current song to the list
	data.tags.forEach( setTag );


	// remove tag from the object so we just
	// have instruments
	delete data.tags;
	
	console.log( data );

	// traverse instruments
	for ( var [ instrument, links ] of Object.entries( data ) ) {
		// console.log( instrument, links );
		allInstruments = allInstruments.concat( instrument );
	}
	
	console.log( '-------------------------------------------' );
}

// filter duplicates
console.log( 'ALL TAGS', allTags );
allInstruments = Array.from( new Set( allInstruments ) );


// testing
console.log( '====================================================' );


// configure main object
const sheetData = {
	"instruments"	: allInstruments,
	"tags"			: allTags,
	"arrangements"	: sheetMusic,
};


// get going
export default sheetData;