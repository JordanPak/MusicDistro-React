/**
 * Tag component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Arrangement from './Arrangement';


/**
 * Tag class
 */
class Tag extends Component {

	// show this thing
	render() {

		// quit if no arrangements
		if ( Object.keys( this.props.arrangements ).length === 0 ) {
			return null;
		}

		return (
			<figure>
				<figcaption>{ this.props.title }</figcaption>

				<ul>{ Object.keys( this.props.arrangements ).map( ( title, index ) => (
					<Arrangement key={ index }
					             sheets={ this.props.arrangements[ title ] }
					             title={ title } />
				)) }</ul>
			</figure>
		);
	}
}


/**
 * Define props
 */
Tag.propTypes = {
	title			: PropTypes.string.isRequired,
	arrangements	: PropTypes.object
};


// get going
export default Tag;