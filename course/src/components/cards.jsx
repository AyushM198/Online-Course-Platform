import React, { useState } from "react";
import styled from "styled-components";
// import Rating from "@material-ui/lab/Rating";

function Card({ id, image, title, price, rating }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/basket/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          price,
          image,
          rating,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setBasket((prevBasket) => [...prevBasket, data]);
      } else {
        console.error("Failed to add to basket");
      }
    } catch (error) {
      console.error("Error adding to basket:", error);
    }
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        
        <p>₹ {price}</p>

        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
