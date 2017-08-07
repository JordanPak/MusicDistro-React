/**
 * Arrangement component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';



/**
 * Arrangement class
 */
class Arrangement extends Component {

	// show this thing
	render() {
		return(
			<li>
				{ this.props.title }
				{ this.props.sheets.map( ( link, index ) =>
					<a key={ index } href={ link }>DL</a>
				) }		
			</li>
		);
	}
}


/**
 * Define props
 */
Arrangement.propTypes = {
	title	: PropTypes.string.isRequired,
	sheets	: PropTypes.array
};


// get going
export default Arrangement;
