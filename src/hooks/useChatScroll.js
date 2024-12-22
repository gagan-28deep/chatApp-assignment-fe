import { useEffect, useRef } from "react";

// Function to scroll to bottom of chat
function useChatScroll(dep) {
	const ref = useRef();
    console.log("ref", ref?.current?.scrollHeight);

	useEffect(() => {
		setTimeout(() => {
			if (ref.current) {
				ref.current.scrollTop = ref.current.scrollHeight;
			}
		}, 100);
	}, [dep]);

	return ref;
}

export default useChatScroll;

