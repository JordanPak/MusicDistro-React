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
 * List of instruments
 */
var instruments = [
	'Piccolo', 'Clarinet', 'Alto Sax', 'Tenor Sax',
	'Trumpet', 'Mellophone'
];


/**
 * Form class
 */
class Form extends Component {

	// update the instrument state on change
	handleInstrumentChange = ( e ) => {
		this.props.onInstrumentChange( e.target.value );
	}


	// output the component
	render() {

		// build options
		var options = instruments.map( ( instrument, index ) => 

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
							onChange={ this.handleInstrumentChange }>

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
	onInstrumentChange : PropTypes.func.isRequired
};


// give it
export default Form;