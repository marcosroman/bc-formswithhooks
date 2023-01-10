import React from 'react';
import './App.css';
import Form from './components/Form.jsx';
import Results from './components/Results.jsx';

function App() {
	const [state,setState] = React.useState({
		firstName : "",
		lastName : "",
		email : "",
		password : "",
		confirmPassword : "",
	});

  return (
    <div className="App">
			<Form inputs={state} setInputs={setState} />
			<Results data={state} />
    </div>
  );
}

export default App;
