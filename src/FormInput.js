import './FormInput.css';
import { useState } from 'react';

function FormInput(props) {
  const { label } = props;

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        type="text" 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput;