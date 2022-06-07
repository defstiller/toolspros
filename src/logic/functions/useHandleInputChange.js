import {useState} from "react";

function useHandleInputChange() {
	const [input, setInput] = useState("");

	function defaultInput() {
		console.log("default");
	}
	function objectInput(event) {
		const value = event.target.value;
		const name = event.target.name;
		setInput({
			...input,
			[name]:value
		});

	}
	return {defaultInput, objectInput, input};
}

export default useHandleInputChange;