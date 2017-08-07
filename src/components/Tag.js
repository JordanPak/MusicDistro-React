/**
 * Tag component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React     from 'react';
import PropTypes from 'prop-types';

// components
import Arrangement from './Arrangement';


/**
 * Build tag
 */
const Tag = ( props ) => {

	// quit if no arrangements
	if ( Object.keys( props.arrangements ).length === 0 ) {
		return null;
	}

	return (
		<figure>
			<figcaption>{ props.title }</figcaption>

			<ul>{ Object.keys( props.arrangements ).map( ( title, index ) => (
				<Arrangement key={ index }
								sheets={ props.arrangements[ title ] }
								title={ title } />
			)) }</ul>
		</figure>
	);
};


Tag.propTypes = {
	title			: PropTypes.string.isRequired,
	arrangements	: PropTypes.object
};

export default Tag;
