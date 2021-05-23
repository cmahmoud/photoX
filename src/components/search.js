import axios from "axios";
import { useRef } from "react";
import { useSuperContext } from "../lib";

export function Search() {
	const { state, dispatch } = useSuperContext();
	const searchInput = useRef();
	const searchPhotos = async (e) => {
		e.preventDefault();
		await axios
			.get(
				"https://api.unsplash.com/search/photos?per_page=30&query=" +
					e.target.value,
				{
					headers: {
						Authorization:
							"Client-ID " + process.env.REACT_APP_TOKEN,
					},
				}
			)
			.then((res) =>
				dispatch({ type: "SET_PHOTOS", payload: res.data.results })
			);
	};
	const reset = async () => {
		searchInput.current.value = "";
		await axios
			.get("https://api.unsplash.com/photos?per_page=30", {
				headers: {
					Authorization: "Client-ID " + process.env.REACT_APP_TOKEN,
				},
			})
			.then((result) => {
				dispatch({ type: "SET_PHOTOS", payload: result.data });
			});
	};

	return (
		<div className="flex gap-1 mb-3">
			<input
				type="text"
				ref={searchInput}
				onChange={searchPhotos}
				className="w-5/6 md:w-11/12 py-2 px-2 border-2 border-purple-500 font-bold text-purple-500 focus:outline-none"
			/>
			<button
				className="w-1/6 md:w-1/12 py-2 px-2 border-2 border-purple-500 font-bold text-white bg-purple-500"
				onClick={reset}
			>
				Reset
			</button>
		</div>
	);
}
