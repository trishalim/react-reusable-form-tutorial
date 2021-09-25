import React, { useState } from 'react';

export const FormContext = React.createContext({
  form: {}
});

function Form(props) {
  const { children } = props;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    console.log({name, value});

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
    <form>
      <FormContext.Provider value={{
        form,
        handleFormChange
      }}>
        {children}
      </FormContext.Provider>

      <button type="button" onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default Form;