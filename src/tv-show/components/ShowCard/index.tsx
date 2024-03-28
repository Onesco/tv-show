
import React from "react";
import styled from "@emotion/styled";
import IMovieShow from "../../../interface/tv-show/IMovieShow";


type ShowCardPropType ={
    show: IMovieShow;
    error: string;
    isLoading: boolean;
  }


const Title = styled.h1`
  font-size: 2.5rem;
  `;

const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
  `
  ;

const ShowCard = ({ show, error, isLoading }: ShowCardPropType) => {

  const summaryObj = {__html: show.summary};  

    return (
      <>
        <div style={{ }}>
          <Title>{show.name}</Title>
          <div style={{display: "flex", flexDirection: "row", gap: "1.5rem"}}>
            <div style={{backgroundColor: "gray"}}>
              <Image src={show.image.original}>
              </Image>
            </div>
            <div style={{margin: 0, lineHeight:1.5}} dangerouslySetInnerHTML={summaryObj}/>
          </div>
        </div>
      </>
    )
};

export default ShowCard;