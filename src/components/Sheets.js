/**
 * Sheets component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Tag from './Tag';


/**
 * Sheets class
 */
class Sheets extends Component {

	/**
	 * Get a tag's arrangements
	 * 
	 * @param  string  title         the current tag's name/title
	 * @return object  arrangements  key: arrangement's name. value: arrangement's arrangements 
	 */
	getTagArrangements = ( title ) => {
		
		var arrangements = {};

		// grab the arrangements with selected instrument
		// for each of the tag's arrangements
		this.props.tags[ title ].forEach( ( arrangement ) => {

			// get the arrangement's sheets for the
			// selected instrument
			var sheetsForInstrument = this.props.arrangements[ arrangement ][ this.props.instrument ];

			// if there's sheets, grab them
			if ( sheetsForInstrument ) {
				arrangements[ arrangement ] = sheetsForInstrument;
			}

		}, this );

		return arrangements;
	}


	/**
	 * Show the tags or warning
	 */
	render() {

		// no instruments or tags?
		if ( ! this.props.instrument ) {
			return null;
		} else if ( Object.keys( this.props.tags ).length === 0 ) {
			console.log( 'No tagged arrangements found' );
			return null;
		}

		return (
			<section className="sheets"><div className="wrap">
				{ this.props.instrument ? Object.keys( this.props.tags ).map( ( title, index ) => (
					<Tag key={ index }
					     title={ title }
						 arrangements={ this.getTagArrangements( title ) } />
				)) : null }
			</div></section>
		);
	}
}


/**
 * Define props
 */
Sheets.propTypes = {
	instrument		: PropTypes.string,
	arrangements	: PropTypes.object
};


// get going
export default Sheets;