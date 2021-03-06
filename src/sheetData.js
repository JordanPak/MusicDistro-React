/**
 * Get sheet tags / data from store
 * 
 * @since 0.1.0
 * @package musicdistro
 */

import sheetMusic from './sheet-music.json';


/**
 * Tag / instrument store
 */
var allTags        = {};
var allInstruments = [];


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
		allTags[ tag ] = [ arrangement ];
	}
	
	else {
		allTags[ tag ].push( arrangement );
	}
}


/**
 * Arrangement loop
 */
for ( var [ arrangement, data ] of Object.entries( sheetMusic ) ) {

	// set arrangement tags
	if ( data.tags ) {
		data.tags.forEach( setTag );
	}

	// remove tag from the object so we just
	// have instruments
	delete data.tags;

	// traverse and add instruments
	for ( var [ instrument ] of Object.entries( data ) ) {
		allInstruments = allInstruments.concat( instrument );
	}
}


// filter duplicate instruments
allInstruments = Array.from( new Set( allInstruments ) );


// configure main object
const sheetData = {
	"instruments"	: allInstruments,
	"tags"			: allTags,
	"arrangements"	: sheetMusic,
};

export default sheetData;
