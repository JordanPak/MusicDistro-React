import React, { Component } from 'react';


class Form extends Component {

	render() {
		return (
			<section className="form"><div className="wrap">
				<form action="">

					<label htmlFor="instrument">Select An Instrument</label>

					<select name="instrument" id="instrument">
						<option value="piccolo">Piccolo</option>
						<option value="clarinet">Clarinet</option>
						<option value="alto-sax">Alto Sax</option>
						<option value="tenor-sax">Tenor Sax</option>
					</select>

					<input type="submit" value="Go" />

				</form>
			</div></section>
		);
	}
}

export default Form;