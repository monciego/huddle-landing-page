import React from "react";
import {
  CardDescription,
  CardDescriptionContainer,
  CardImage,
  CardImageContainer,
  CardTitle,
  StyledCard,
} from "../styles/Card.styled";

const Card = ({ id, image, title, details }) => {
  return (
    <StyledCard direction={id % 2 === 0 ? "row-reverse" : "row"}>
      <CardDescriptionContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{details}</CardDescription>
      </CardDescriptionContainer>
      <CardImageContainer>
        <CardImage src={image} alt={title} />
      </CardImageContainer>
    </StyledCard>
  );
};

export default Card;
