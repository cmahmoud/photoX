import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SuperContainer } from "./lib";
import "./index.css";

ReactDOM.render(
	<SuperContainer>
		<App />
	</SuperContainer>,
	document.getElementById("root")
);
