import React from 'react';

const Select = ({value, label, id, options, onChange}) => {
	console.log("value222",value);
	return (
		<>
			<div>
				<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
				<select
					defaultValue={value}
					id="countries"
					onChange={onChange}
	        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					{options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.categoryName}
						</option>
					))}
				</select>
			</div>
		</>
	)
}

export default Select;