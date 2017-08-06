/**
 * Form component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Form class
 */
class Form extends Component {

	// output the component
	render() {

		// build options
		var options = this.props.instruments.map( ( instrument, index ) => 

			<option key={ index } value={ instrument } >
				{ instrument }
			</option>
		);

		return (
			<section className="form"><div className="wrap">

				<h1>MusicDistro</h1>

				<form onSubmit={ this.handleSubmit }>

					<select name="instrument"
					        id="instrument"
							defaultValue=""
							onChange={ ( e ) => { this.props.onInstrumentChange( e.target.value ) } } >

						<option value="" disabled>Select an Instrument</option>  
						{ options }
					</select>

				</form>
			</div></section>
		);
	}
} // class Form


/**
 * Define Form proptypes
 */
Form.propTypes = {
	instruments			: PropTypes.array.isRequired,
	onInstrumentChange	: PropTypes.func.isRequired
};


// give it
export default Form;