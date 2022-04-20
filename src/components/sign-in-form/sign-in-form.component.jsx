import React from "react";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../firebase/firebase.component";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};


const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, } = formFields;
  console.log(formFields);

  const resetFormFields = ()=>{
      setFormFields(defaultFormFields)
  }

   const signInWithGoogle = async () => {
     const { user } = await signInWithGooglePopup();
     await createUserDocumentFromAuth(user);
   };
  const handleSubmit = async (event) => {
    event.preventDefault();
    resetFormFields();
        try {
      const response = await signInAuthUserWithEmailAndPassword(email,password)
      console.log(response);
    
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Please check the provided password");
          break;
        case "auth/user-not-found":
          alert("Please sign-up or confirm e-mail");
          break;
        default:
          console.log(error);
          break;
      }
      // if(error.code === "auth/wrong-password"){
      //   alert('incorrect password')
      // }
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
        
      </form>
    </div>
  );
};

export default SignInForm;
