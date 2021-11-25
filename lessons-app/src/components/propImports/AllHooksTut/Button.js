import React, { forwardRef, useImperativeHandle, useState } from 'react';

// usefull when needing to call a re-usable component from an external component

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  )
});

export default Button;
