import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

// https://github.com/briancodex/react-form-v1.git


//https://youtu.be/KGFG-yQD7Dw

//rfac
function FormSubmit() {
  const FormsFullLink = 'https://youtu.be/KGFG-yQD7Dw';

  const [isSubmitted, setIsSubmtted] = useState(false);

  function submitForm() {
    setIsSubmtted(true);
  }
  return (
    //.form-container
    //.span.close-btn
    //.span.form.content-left
   
    <>
    <a href={FormsFullLink} >Link to YouTube Forms</a>
      <div className="form-container">
        <span className="close-btn"> x </span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship"/>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>

  );
};
export default FormSubmit;
