import React from 'react';

import './form-input.scss';

type Props = {
	label: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type: string;
	value: string;
	required: boolean;
};

const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
