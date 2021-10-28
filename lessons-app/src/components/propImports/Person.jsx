import React from 'react';
import ConditionalRender from './ConditionalRender'
// simple react snippets: sfc - A stateless funcitonal component
import PropTypes from 'prop-types';
//import { bool } from 'prop-types';
//Prop Types
//https://youtu.be/7_67nxgw5W4

const Person = ({ person }) => {
  const PropTypesLink = 'https://youtu.be/7_67nxgw5W4';
 

  return (
  

    <div className="container">
      <a href={PropTypesLink}>Link to YouTube Prop Types</a>  
      <div className="card text-white bg-dark mb-3" style={{maxWidth: + '20rem'}}>
        <div className='person'>
          <div className="card-body">
            <p className="card-text">{person.name}</p>
            <p className="card-text">{person.age}</p>
            <p className="card-text">{person.email}</p>
            <p className="card-text">{person.isMarried}</p>
            <p className="card-text">Children</p>
            <ul className="list-group-item">
            <span className="badge bg-success">Success</span>
              {person.children.map((child, key) => {
                return <li key={key}>{child}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <ConditionalRender />
    </div>

  );

};


Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    isMarried: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.string)
  })


}

export default Person;
