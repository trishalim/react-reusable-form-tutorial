import { useState } from 'react';
import './App.css';
import FormInput from './FormInput';

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Update state
    // Assign new value to the appropriate form field
    setForm({
      ...form,
      [name]: value
    });
  };

  const submit = () => {
    console.log('Form: ', form);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <FormInput 
        label="First Name" 
        name="firstName" 
        value={form.firstName}
        onChange={handleFormChange} />
      <FormInput 
        label="Last Name" 
        name="lastName" 
        value={form.lastName}
        onChange={handleFormChange} />
      <FormInput 
        label="Email Address" 
        type="email" 
        name="emailAddress" 
        value={form.emailAddress}
        onChange={handleFormChange} />
      <FormInput 
        label="Password" 
        type="password" 
        name="password" 
        value={form.password}
        onChange={handleFormChange} />

      <button type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default App;
