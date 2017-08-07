/**
 * Tag component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
// import PropTypes from 'prop-types';


/**
 * Tag class
 */
class Tag extends Component {

	// show this thing
	render() {

		// quit if no arrangements
		console.log( this.props.arrangements );

		if ( Object.keys( this.props.arrangements ).length === 0 ) {
			console.log( this.props.title + ' has no arrangements for the selected instrument' );
			return null;
		}

		return (
			<figure><figcaption>{ this.props.title }</figcaption></figure>
		);
	}
}


/**
 * Define props
 */
// Tag.propTypes = {

// };


// get going
export default Tag;