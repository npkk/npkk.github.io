import { createContext, useCallback, useState } from "react";

type RootContext = {
	root: string;
	setRoot: (root: string) => void;
};

const defaultRootContext: RootContext = {
	root: "",
	setRoot: (_) => {},
};

export const rootContext = createContext<RootContext>(defaultRootContext);
export const useRootContext = (): RootContext => {
	const [root, setRoot] = useState(defaultRootContext.root);
	const setNewRoot = useCallback((root: string): void => {
		setRoot(root);
	}, []);
	return {
		root: root,
		setRoot: setNewRoot,
	};
};
