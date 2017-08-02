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

	// initialize the first instrument
	constructor( props ) {
		super( props );
		this.state = { instrument : instruments[0] }
	}


	// update the instrument state on change
	handleInstrumentChange = ( e ) => {
		this.setState({ instrument : e.target.value });
	}


	// send the new instrument to the app
	handleSubmit = ( e ) => {
		e.preventDefault();
		this.props.onInstrumentChange( this.state.instrument );
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

					<label htmlFor="instrument">Select An Instrument</label>

					<select name="instrument"
					        id="instrument"
							onChange={ this.handleInstrumentChange }>
						{ options }
					</select>
					
					<input type="submit" value="Go" />

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