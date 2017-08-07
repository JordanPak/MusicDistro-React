/**
 * Sheets component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Sheets class
 */
class Sheets extends Component {

	render() {

		console.log( this.props );

		var message = this.props.instrument ? <h1>Getting { this.props.instrument } sheets</h1> : "";

		return (
			<section className="sheets"><div className="wrap">
				{ message }
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