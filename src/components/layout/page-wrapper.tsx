import { ReactNode, useEffect } from "react";
import { useAppStore } from "../../store";

type Props = {
	state?: string,
	children: ReactNode;
};

const PageWrapper = (props: Props) => {
  	const { setAppState } = useAppStore()

	useEffect(() => {
		if (props.state) {
			console.log("=====", props.state)
			setAppState(props.state);
		}
	}, [props]);

	return (
		<>{props.children}</>
	);
};

export default PageWrapper;