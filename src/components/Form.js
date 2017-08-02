import React, { Component } from 'react';


class Form extends Component {

	getOptions = () => {
		return ( this.props.instruments.map( ( instrument ) =>
		
			<option key={ instrument.key } value={ instrument.key } >
				{ instrument.label }
			</option>
		));
	}

	render() {
		return (
			<section className="form"><div className="wrap">
				<form action="">

					<label htmlFor="instrument">Select An Instrument</label>

					<select name="instrument" id="instrument">{ this.getOptions() }</select>
					
					<input type="submit" value="Go" />

				</form>
			</div></section>
		);
	}
}

export default Form;