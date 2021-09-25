import { useState } from 'react';
import './App.css';
import Form from './Form';
import FormInput from './FormInput';

function App() {
  const [message, setMessage] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  };

  const submit = (form) => {
    setMessage(`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <Form submit={submit} initialValues={initialValues}>
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

      <p>{message}</p>

      <h2>Log In</h2>
      <Form
        submit={(form) => {
          alert(`Logged in as ${form.username}!`);
        }}
        initialValues={{
          username: '',
          password: ''
        }}>
        <FormInput
          label="Username"
          name="username" />
        <FormInput
          label="Password"
          name="password" />
      </Form>
    </div>
  );
}

export default App;
