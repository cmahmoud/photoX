import { useContext, useReducer, createContext } from "react";

const initialState = {
	photos: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_PHOTOS": {
			return { ...state, photos: action.payload };
		}
		default:
			return state;
	}
};

const SuperContext = createContext();

export const SuperContainer = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<SuperContext.Provider value={{ state, dispatch }}>
			{children}
		</SuperContext.Provider>
	);
};

export const useSuperContext = () => {
	return useContext(SuperContext);
};
