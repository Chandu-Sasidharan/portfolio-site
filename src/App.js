import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import More from "./pages/more";
import GlobalStyles from "./globalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/more" component={More} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
