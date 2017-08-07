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

	// warning?
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


	// show this thing
	render() {
		return (
			<section className="sheets"><div className="wrap">
				{ this.warningMessage() }
				{ Object.keys( this.props.tags ).map((key, index) => ( 
					<p key={index}> this is my key {key} and this is my value {this.props.tags[key]}</p> 
				)) }

				{ Object.keys( this.props.tags ).map( ( title, index ) => (
					<Tag key={ index }
					     title={ title }
						 instrument={ this.props.instrument }
						 arrangements={ this.getTagArrangements( title ) } />
				)) }

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