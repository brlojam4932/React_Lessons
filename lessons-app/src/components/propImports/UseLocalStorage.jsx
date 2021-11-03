import { useState, useEffect }  from 'react'

// rfc (react functional component)

function getSavedValue(key, initialValue) {
  //localStorage.getItem(key)
  //from key location --> convert to JSON 
  //JSON.parse(localStorage.getItem(key))
  //--> store our value - our saved value will be equal to -->

  // if we have a saved value - return saved value
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue;

  // we need to check if inital value is a function and call it
  if (initialValue instanceof Function ) return initialValue();

  // else return default inital value; which is a value, not a function
  return initialValue;
}

// we have a new custom hook
// we use our "key" to get our saved 'value'
export default function UseLocalStorage(key, initialValue) {
  //const [value, setValue] = useState(initialValue);
  // useState can take a function -->
  // here we return the value from the function from our Key and our Value
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
    // when our value changes...run this hook
  });

  useEffect((key) => {
    // we can only pass string values to local storage
    localStorage.setItem(key, JSON.stringify(value))
  },[value]);

  return [value, setValue];
}
