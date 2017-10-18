import React, {Component} from "react";
import Button from "./Button.jsx";

class Clock extends Component{
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			isStarted: false
		}
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
	}

	componentDidMount() {
		if(this.props.autoStart){
			this.start();
		}
	}

	componentWillUnmount() {
		this.stop();
	}

	start(){
		this.setState({
			isStarted: true
		});
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	stop(){
		clearInterval(this.timerId);
		this.setState({
			isStarted: false
		})
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}

	render(){
		return (<div>
			{this.state.date.toLocaleTimeString()}
			<Button text="Start" onClick={this.start} disabled={this.state.isStarted} />
			<Button text="Stop" onClick={this.stop} disabled={!this.state.isStarted} />
		</div>);
	}
}

export default Clock;