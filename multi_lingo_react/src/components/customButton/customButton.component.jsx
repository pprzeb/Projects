
import styled from 'styled-components';




const color = props =>{
	if (props.violet) {
		return ('#540D6E')
	} else if (props.pink)  {
		return ('#EE4266')
	} else if (props.orange) {
		return ('#FFD23F')
	} else if (props.caraibbean) {
		return ('#3BCEAC')
	} else if (props.green) {
		return ('#0EAD69')
	} else return ('#3cadd4')
};

const bWidth = props => (props.widthFix? '9em': null)

const CustomButton = styled.button`
 		-moz-appearance: none;
		-webkit-appearance: none;
		-o-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-o-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: ${color};
		border-radius: 30px;
		border: 0;
		width: ${bWidth};
		color: #ffffff !important;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		font-size: 1em;
		letter-spacing: 0.1em;
		height: 2.85em;
		line-height: 2.95em;
		padding: 0 2em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		margin: 5px;

		&:hover {
			${'' /* background-color: ${color}; */}
			filter: brightness(110%);
			text-decoration: none;
			outline: none
		}
		&:active {
			filter: brightness(80%);
			text-decoration: none;
		}
		&:focus {
			outline: none
		}
`


export default CustomButton