import React, { ChangeEvent } from "react";

interface TimeInputProps {
	value: string;
	onChange: (value: string) => void;
	disabled?: boolean;
}

const TimeInput: React.FC<TimeInputProps> = ({
	value,
	onChange,
	disabled = false,
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		onChange(newValue);
	};

	return (
		<div className="w-full relative">
			<input
				type="time"
				value={value}
				onChange={handleChange}
				disabled={disabled}
				placeholder="hh:mm"
				className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
			/>
			<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
				Expected Time (hh:mm)
			</label>
		</div>
	);
};

export default TimeInput;
