import React, { Component } from 'react';


/**
 * List of instruments
 */
var instruments = [
	{
		key   : 'piccolo',
		label : 'Piccolo'
	},
	{
		key   : 'clarinet',
		label : 'Clarinet'
	},
	{
		key   : 'alto-sax',
		label : 'Alto Sax'
	},
	{
		key   : 'tenor-sax',
		label : 'Tenor Sax'
	},
	{
		key   : 'trumpet',
		label : 'Trumpet'
	},
	{
		key   : 'mellophone',
		label : 'Mellophone'
	}
];


class Form extends Component {

	// initialize the first instrument
	constructor( props ) {
		super( props );
		this.state = { instrument : instruments[0] }
	}


	// update the instrument state on change
	handleInstrumentChange = ( e ) => {

		this.setState({ instrument : {
			key   : e.target.value,
			label : instruments.find( function( instrument ) {
				return instrument.key === e.target.value
			}).label
		}});
	}


	// send the new instrument to the app
	handleSubmit = ( e ) => {
		e.preventDefault();
		this.props.onInstrumentChange( this.state.instrument );
	}


	// output the component
	render() {

		// build options
		var options = instruments.map( ( instrument ) => 

			<option key={ instrument.key } value={ instrument.key } >
				{ instrument.label }
			</option>
		);

		return (
			<section className="form"><div className="wrap">
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
}

export default Form;