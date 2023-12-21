import './App.css';

// function WhoAmI (props) {
// 	return (
// 		<div>
// 			<h1>My name is {props.name}, surname - {props.surname}</h1>
// 			<a href={props.link}>My profile</a>
// 		</div>
// 	)
// }

function WhoAmI ({name, surname, link}) {
	return (
		<div>
			<h1>My name is {name.firstName}, surname - {surname()}</h1>
			<a href={link}>My profile</a>
		</div>
	)
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