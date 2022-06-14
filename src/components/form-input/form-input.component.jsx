import React from 'react'
import { FormGroup, Input, FormLabel } from "./form-input.styles";

const FormInput = ({label,...otherProps}) => {
    return (
      <FormGroup>
        <Input {...otherProps} />
        {label && (
          <FormLabel
          shrink ={otherProps.value.length}

          >
            {label}
          </FormLabel>
        )}
      </FormGroup>
    );
}

export default FormInput
