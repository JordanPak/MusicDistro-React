/**
 * Arrangement component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React     from 'react';
import PropTypes from 'prop-types';


/**
 * Build Arrangement
 */
const Arrangement = ( props ) =>(
	<li>
		{ props.title }
		{ props.sheets.map( ( link, index ) =>
			<a key={ index } href={ link }>DL</a>
		) }		
	</li>
);


/**
 * Define props
 */
Arrangement.propTypes = {
	title	: PropTypes.string.isRequired,
	sheets	: PropTypes.array
};


// get going
export default Arrangement;
