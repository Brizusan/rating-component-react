import React, { useState } from "react";
import styled from "styled-components";
import start from "../assets/images/icon-star.svg";
import CardThanks from "./CardThanks";

const Card = () => {
  const [valor, setValor] = useState("");

  const [enviar, setEnviar] = useState(false);

  const CARD = styled.div`
    max-width: 45rem;
    border-radius: 1.5rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    background: linear-gradient(90deg, var(--dark-blue), var(--dark-blue));

    .icon {
      width: 40px;
      height: 40px;
      padding: 1rem;
      border-radius: 50%;
      background-color: var(--very-dark-blue);
    }
    .title {
      color: var(--white);
      font-size: 2.5rem;
    }
    p {
      color: var(--m-greyrey);
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        background-color: var(--very-dark-blue);
        color: var(--lg-grey);
        border: none;

        :focus {
          color: white;
          background-color: orange;
        }
        :hover {
          background-color: var(--lg-grey);
          color: white;
        }
      }
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
  `;

  const handleClick = ({ target }) => {
    console.log(target.value);
    setValor(target.value);
  };

  return (
    <>
      {!enviar && (
        <CARD className="card">
          <img className="icon" src={start} alt="icon start" />
          <h1 className="title">How did we do?</h1>
          <p>
            Please let us Know hpow we did with your support request.all
            feedback is appreciated to help us improve our offering!
          </p>

          <section className="buttons">
            <button className="btn" value={1} onClick={handleClick}>
              1
            </button>
            <button className="btn" value={2} onClick={handleClick}>
              2
            </button>
            <button className="btn" value={3} onClick={handleClick}>
              3
            </button>
            <button className="btn" value={4} onClick={handleClick}>
              4
            </button>
            <button className="btn" value={5} onClick={handleClick}>
              5
            </button>
          </section>
          <button className="cta" onClick={()=>setEnviar(true)}>Submit</button>
        </CARD>
      )}

      {
        enviar && <CardThanks number={valor} setEnviar={setEnviar}/>
      }
    </>
  );
};

export default Card;
