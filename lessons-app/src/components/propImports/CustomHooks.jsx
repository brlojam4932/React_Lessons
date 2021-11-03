import React from 'react';
import UseLocalStorage from './UseLocalStorage';
import UseUpdateLogger from './UseUpdateLogger';

export default function CustomHooks() {

  // we save our value with key of "name" but it's value is empty-->
  const [benName, setBenName] = UseLocalStorage('name', '');
  // we check if our function works...
  //const [benName, setBenName] = UseLocalStorage('name', () => '');

  UseUpdateLogger(benName);


  return (
    <>
      <section>
        <h1>Custom Hooks in 10 min</h1>
        <a href='https://youtu.be/6ThXsUwLWvc' >Link to video</a>
      </section>

      <div className="form-group">
        <label className="col-form-label mt-4" for="inputDefault">Default input</label>
        <input className="form-control" placeholder="Type something here" id="inputDefault"
          type="text"
          value={benName}
          onChange={e => setBenName(e.target.value)}
        />
      </div>

    </>

  )
}


