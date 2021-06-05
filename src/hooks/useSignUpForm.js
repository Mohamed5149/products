import { useState } from 'react';
import validate from '../utilities/validation';

const useSignUpForm = (initialValues) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleInputChange = (event) => {
    setInputs(inputs => (
      {
        ...inputs,
        [event.target.name]: event.target.value,
        [event.target.name + 'IsValid']: validate(event.target.name, event.target.value),
        [event.target.name + 'IsTouched']: true,
      }
    ));
  }
  return {
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;