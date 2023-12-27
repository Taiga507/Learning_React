import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
	constructor (props) {
		super(props);
		this.state = {
			years: 44,
			position: ''
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

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {position, years} = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>+++</button>
				<h1>My name is {name.firstName}, surname - {surname()}, age - {years}, position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
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