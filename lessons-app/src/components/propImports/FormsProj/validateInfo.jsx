export default function validateInfo(values) {
  let errors = {}

  // if logic below not true; showcase Username required
  if(!values.username.trim()) {
    errors.username = "Username required";

  }

  if (!values.email) {
    errors.email = "Email required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be longer than 6 characters";

  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    // display error
    errors.password2 = "Passwords does not match";

  }

  return errors;


};