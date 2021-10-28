import React from 'react';
// import custom hook
import useForm from './useForm';
import validate from './validateInfo';
import { Link } from "react-router-dom";

// ctl space enter: suppossed to complete divs
const FormSignup = ({ submitForm }) => {
  const linkSign = "/SignIn";
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);


  return (
    <div>
      {/*.form-content-right */}
      <div className="form-content-right">
        {/* form.form */}
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1>Get started with us today! Create your
            account by filling out the information below
          </h1>
          {/* .form-inputs */}
          <div className="form-inputs">
            {/* label.form-label */}
            <label htmlFor="username"
              className="form-label">
              Username
            </label>
            {/* input.form-input */}
            <input
              id='username'
              type="text"
              name="username"
              className="form-input"
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange} />
            {errors.username && <p>{errors.username} </p>}
          </div>

          <div className="form-inputs">
            {/* label.form-label */}
            <label htmlFor="email"
              className="form-label">
              Email
            </label>
            {/* input.form-input */}
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange} />
            {errors.email && <p>{errors.email} </p>}
          </div>

          {/* select + ctrl D x; selects all */}
          <div className="form-inputs">
            {/* label.form-label */}
            <label htmlFor="password"
              className="form-label">
              Password
            </label>
            {/* input.form-input */}
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange} />
            {errors.password && <p>{errors.password} </p>}
          </div>

          <div className="form-inputs">
            {/* label.form-label */}
            <label htmlFor="password2"
              className="form-label">
              Confirm Password
            </label>
            {/* input.form-input */}
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder='Re-enter your password'
              value={values.password2}
              onChange={handleChange} />
            {errors.password2 && <p>{errors.password2} </p>}
          </div>
          {/* button.form-input-btn */}
          <button className="form-input-btn"
            typeof='submit'> Sign Up</button>
          {/* span.form-input-login */}
          <span className="form-input-login">
            Already have an account? Login
            <Link to={linkSign}>here</Link>
          </span>

          <button></button>
        </form>
      </div>

    </div>
  );
}

export default FormSignup;