function Form(props) {
  const { formInitialValues, children } = props;

  const [form, setForm] = useState(formInitialValues);

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
    <form>
      {children}

      <button type="button" onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default Form;