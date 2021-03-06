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
		<span>{ props.title }</span>
		{ props.sheets.map( ( link, index ) =>
			<a key={ index } href={ link } target="_BLANK">{ index + 1 }</a>
		) }		
	</li>
);


Arrangement.propTypes = {
	title	: PropTypes.string.isRequired,
	sheets	: PropTypes.array
};

export default Arrangement;
