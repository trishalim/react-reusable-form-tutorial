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
    // Clone form because we need to modify it
    const updatedForm = { ...form };

    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value
    };

    console.log('Form changed: ', updatedForm);

    // Update state
    setForm(updatedForm);
  };

  if (!form) return <></>;

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
    </div>
  );
}

export default App;
