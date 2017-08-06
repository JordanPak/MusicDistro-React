/**
 * Get sheet tags / data from store
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// get sheet music
import sheetMusic from './sheet-music.json';



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


// configure main object
const sheetData = {
	"instruments"	: allInstruments,
	"tags"			: allTags,
	"arrangements"	: sheetMusic,
};


// get going
export default sheetData;