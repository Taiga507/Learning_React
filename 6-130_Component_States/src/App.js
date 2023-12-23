import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
	constructor (props) {
		super(props);
		this.state = {
			years: 44,
			text: '+++'
		}
	}

	// nextYear = () => {
	// 	this.setState({
	// 		years: this.state.years + 1
	// 	});
	// }

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}));
	}

	render() {
		const {name, surname, link} = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>+++</button>
				<h1>My name is {name.firstName}, surname - {surname()}, age - {this.state.years}</h1>
				<a href={link}>My profile</a>
			</div>
		)
	}
}

function App() {
  return (
	<div className="App">
		<WhoAmI name={{firstName: 'John'}} surname={() => {return 'Doe'}} link='github.com'/>
		<WhoAmI name={{firstName: 'Jane'}} surname={() => {return 'Does'}} link='facebook.com'/>
	</div>
  );
}

export default App;