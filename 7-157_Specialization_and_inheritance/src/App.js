import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display; block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
			<EmpItem active>
				<Button onClick={this.nextYear}>+++</Button>
				<Header>My name is {name.firstName}, surname - {surname()}, age - {years}, position - {position}</Header>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
	)
}

const HelloGreating = () => {
	return (
		<div style={{'width': '600px', 'margin': '0 auto'}}>
			<DynamicGreating color={'primary'}>
				<h2>Hello world!</h2>
			</DynamicGreating>
		</div>
	)
}

function App() {
	return (
		<Wrapper>
			<HelloGreating/>
			<BootstrapTest
				left = {
					<DynamicGreating color={'primary'}>
						<h2>This weel was hard</h2>
						<h2>Hello world!</h2>
					</DynamicGreating>
				}
				right = {
					<DynamicGreating color={'primary'}>
						<h2>RIGHT!</h2>
					</DynamicGreating>
				}
			/>

			{/* <DynamicGreating color={'primary'}>
				<h2>This weel was hard</h2>
				<h2>Hello world!</h2>
			</DynamicGreating> */}

			<WhoAmI name={{firstName: 'John'}} surname={() => {return 'Doe'}} link='github.com'/>
			<WhoAmI name={{firstName: 'Jane'}} surname={() => {return 'Does'}} link='facebook.com'/>
		</Wrapper>
	);
}

export default App;