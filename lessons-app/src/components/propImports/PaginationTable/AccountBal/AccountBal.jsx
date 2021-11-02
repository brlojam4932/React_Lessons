import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Section = styled.section`
  border: 1px solid red;
  font-size: 2rem;
  text align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

function AccountBal(props) {

  return (
    <Section>
      Balance $ {props.amount}
    </Section>
  )
}

AccountBal.propTypes = {
  amount: PropTypes.number.isRequired
}


export default AccountBal;
