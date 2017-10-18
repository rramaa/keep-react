import React, {Component} from "react";
import {render} from "react-dom";
import Clock from "./components/Clock.jsx";

class App extends Component {
	render(){
		return (
			<div>
			<Clock autoStart={true} />
			<Clock autoStart={false} />
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));