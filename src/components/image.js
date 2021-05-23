import { useState } from "react";

export function Image({ photo }) {
	const [hidden, setHidden] = useState(true);
	return (
		<div
			className="relative w-auto h-auto avoid-break"
			onMouseOver={() => setHidden(false)}
			onMouseOut={() => setHidden(true)}
		>
			<img
				src={photo.urls.regular}
				alt={photo.alt_description}
				className="h-auto w-full overflow-hidden"
			/>
			<div
				className={
					"absolute w-full h-full bg-purple-300 bg-opacity-50 z-10 top-0 right-0 flex flex-col items-center justify-center border-4 border-purple-500 transition duration-300 ease-in-out" +
					(hidden ? " hidden" : "")
				}
			>
				<a
					href={photo.links.download + "?force=true"}
					download
					className="bg-purple-500 py-2 px-12 rounded-lg font-bold text-white mb-3"
				>
					Download
				</a>
			</div>
		</div>
	);
}
