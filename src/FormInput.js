import './FormInput.css';

function FormInput(props) {
  const { label } = props;

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input type="text"></input>
    </div>
  )
}

export default FormInput;