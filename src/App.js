import './App.css';
import Form from './Form';
import FormInput from './FormInput';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <Form>
        <FormInput 
          label="First Name" 
          name="firstName" />
        <FormInput 
          label="Last Name" 
          name="lastName" />
        <FormInput 
          label="Email Address" 
          type="email" 
          name="emailAddress" />
        <FormInput 
          label="Password" 
          type="password" 
          name="password" />
      </Form>
    </div>
  );
}

export default App;
