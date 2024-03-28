import React from "react";
import styled from "@emotion/styled";
import IMovieShow from "../../../interface/tv-show/IMovieShow";

type ShowCardPropType ={
  show: IMovieShow;
  error: string;
  isLoading: boolean;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px; 
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px; 
  object-fit: none; 
`;

const TextOverlay = styled.div`
  padding: 20px;
  background-color: white;
`;

const Summary = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const ShowCard = ({ show, error, isLoading }: ShowCardPropType) => {
  const summaryObj = { __html: show.summary };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>something went wrong</p>;

  return (
    <CardContainer>
      <Title>{show.name}</Title>
      <ImageContainer>
        <Image src={show.image.original} />
      </ImageContainer>
      <TextOverlay>
        <Summary dangerouslySetInnerHTML={summaryObj} />
      </TextOverlay>
    </CardContainer>
  );
};

export default ShowCard;