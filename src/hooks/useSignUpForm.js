import React, { useState } from 'react';
import validate from '../utilities/validation';

const useSignUpForm = (initialValues) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleInputChange = (event) => {
    setInputs(inputs => (
      {
        ...inputs,
        [event.target.name]: event.target.value,
        [event.target.name + 'IsValid']: validate('length', event.target.value),
        [event.target.name + 'IsTouched']: validate('length', event.target.value),
      }
    ));
  }
  return {
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;