import React from 'react'
import styled from 'styled-components'
import icon from '../assets/images/illustration-thank-you.svg'

const CardThanks = ({number , setEnviar}) => {

  const CARD = styled.div`
    max-width: 45rem;
    border-radius: 1.5rem;
    padding: 2.5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background: linear-gradient(90deg, var(--dark-blue), var(--dark-blue));

    h2{
      color: white;
    }

    .text {
      color: var(--m-greyrey);
    }

    .select{
      border : 2px solid red;
      color: orange;
      padding: 0.5rem 1rem;
      border-radius: 1.5rem;
      background-color: var(--very-dark-blue);
    }

    .cta {
      width: 100%;
      padding: 1.1rem 2.5rem;
      color: var(--white);
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      background-color: var(--orange);
      border: none;
      border-radius: 2.5rem;

      :hover {
        background-color: white;
        color: orange;
      }
    }
  
  `
  return (

    <CARD>
      <img src={icon} alt="image icon" />
      <small className='select'>You selected <span> {number} </span>out of 5</small>
      <h2>Thank you!</h2>
      <p className='text'>we aprecciate takiong the time to give a rating.
      if you ever need more supoport, don't hesitate to get in touch!</p>
      <button className='cta' onClick={()=>setEnviar(false)}>Return</button>
    </CARD>
  )
}

export default CardThanks