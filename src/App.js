import './App.css';
import FormInput from './FormInput';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <FormInput label="First Name" />
      <FormInput label="Last Name" />
      <FormInput label="Email Address" type="email" />
      <FormInput label="Password" type="password" />
    </div>
  );
}

export default App;
