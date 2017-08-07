/**
 * Form component
 * 
 * @since 0.1.0
 * @package musicdistro
 */

// libs
import React     from 'react';
import PropTypes from 'prop-types';


/**
 * Build form
 * 
 * @param object  props  instruments and data callback 
 */
const Form = ( props ) => (
	<section className="form"><div className="wrap">

		<h1>MusicDistro</h1>

		<form>
			<select name="instrument"
					id="instrument"
					defaultValue=""
					onChange={ ( e ) => { props.onInstrumentChange( e.target.value ) } } >

				<option value="" disabled>Select an Instrument</option>  

				{ props.instruments.map( ( instrument, index ) =>
					<option key={ index } value={ instrument }>{ instrument }</option>
				) }				
			</select>
		</form>

	</div></section>
);


Form.propTypes = {
	instruments			: PropTypes.array.isRequired,
	onInstrumentChange	: PropTypes.func.isRequired
};

export default Form;
