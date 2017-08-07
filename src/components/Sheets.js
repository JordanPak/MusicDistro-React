/**
 * Sheets component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry   from 'react-masonry-component';

// components
import Tag from './Tag';


// masonry options
var masonryOptions = {
	transitionDuration : 0,
	columnWidth        : '.tag-sizer',
	gutter             : '.tag-gutter',
	itemSelector       : 'figure'
};


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

		// loop through the tag's arrangements
		this.props.tags[ title ].forEach( ( arrangement ) => {

			// try to get the arrangement's sheets
			// for the selected instrument
			var sheetsForInstrument = this.props.arrangements[ arrangement ][ this.props.instrument ];

			// if found, set them
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

		// slaughter
		return (
			<section className="sheets"><div className="wrap">

				{/* Masonry Layout */}
				<Masonry className={ 'chicken' }
						 options={ masonryOptions }
						 disableImagesLoaded={ true }>

					<div className="tag-sizer"></div>
					<div className="tag-gutter"></div>

					{/* Tags */}
					{ Object.keys( this.props.tags ).map( ( title, index ) => (
						<Tag key={ index }
							title={ title }
							arrangements={ this.getTagArrangements( title ) } />
					)) }
			
				</Masonry>
			</div></section>
		);
	}
}


Sheets.propTypes = {
	instrument		: PropTypes.string,
	arrangements	: PropTypes.object
};

export default Sheets;
