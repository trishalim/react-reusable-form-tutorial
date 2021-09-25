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
      </Form>
    </div>
  );
}

export default App;
