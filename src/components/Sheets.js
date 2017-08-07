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
	 * Generate warning message
	 */
	warningMessage = () => {

		// no instrument?
		if ( ! this.props.instrument ) {
			return <h2>Select an instrument yo</h2>
		}
		
		// no tags?
		else if ( Object.keys( this.props.tags ).length === 0 ) {
			console.log( 'ELLO POPPET' );
			return <h2>There aren't any tagged arrangements :(</h2>
		}
	}


	/**
	 * Get a tag's arrangements
	 * 
	 * @param  string  title         the current tag's name/title
	 * @return object  arrangements  key: arrangement's name. value: arrangement's arrangements 
	 */
	getTagArrangements = ( title ) => {
		
		var arrangements = {};

		this.props.tags[ title ].forEach( ( arrangement ) => {
			arrangements[ arrangement ] = this.props.arrangements[ arrangement ];
		}, this );

		return arrangements;
	}


	/**
	 * Show the tags or warning
	 */
	render() {
		return (
			<section className="sheets"><div className="wrap">
				{ this.warningMessage() }

				{ this.props.tags ? Object.keys( this.props.tags ).map( ( title, index ) => (
					<Tag key={ index }
					     title={ title }
						 instrument={ this.props.instrument }
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