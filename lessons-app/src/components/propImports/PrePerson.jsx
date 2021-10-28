import React from 'react'
import PropTypes from 'prop-types';
import Person from './Person';

function PrePerson(props) {
  return (
    <>
     
      <div className='container'>
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: + '20rem' }}>
          <div className='person'>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.email}</h3>
            <h3>{props.isMarried}</h3>
            <h3>Children</h3>
            <ul>
              {props.children.map((child, key) => {
                return <li key={key}>{child} </li>
              })}
            </ul>
          </div>

        </div>

      </div>

    </>

  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  isMarried: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.string)
}

export default PrePerson;