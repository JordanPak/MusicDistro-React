import React, { Component } from 'react';


class Form extends Component {

	// initialize the first instrument
	constructor( props ) {
		super( props );
		this.state = { instrument : props.instruments[0].key }
	}


	// build our instrument options
	getOptions = () => {
		return ( this.props.instruments.map( ( instrument ) =>

			<option key={ instrument.key } value={ instrument.key } >
				{ instrument.label }
			</option>
		));
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
		return (
			<section className="form"><div className="wrap">
				<form onSubmit={ this.handleSubmit }>

					<label htmlFor="instrument">Select An Instrument</label>

					<select name="instrument"
					        id="instrument"
							onChange={ this.handleInstrumentChange }>
						{ this.getOptions() }
					</select>
					
					<input type="submit" value="Go" />

				</form>
			</div></section>
		);
	}
}

export default Form;