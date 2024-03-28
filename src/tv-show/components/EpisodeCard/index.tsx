import React from "react";
import styled from "@emotion/styled";
import IShowEpisode from "../../../interface/tv-show/IShowEpisode";
import { Link } from "react-router-dom";
import placeholderImage from "../../../constants/tv-show/episodeImagePlaceHolder";


type EpisodeCardPropTypes = {
    episode: IShowEpisode;
}

const Thumbnail = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const Card = styled.section`
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #777;
  display:flex;
  gap: 1.5em;
`;


export default function EpisodeCard({ episode }: EpisodeCardPropTypes) {

  const summaryObj = {__html: episode.summary};  
  return (
    <Link style={{textDecoration: "none", color: "black"}} to={`/episodes/${episode.id}`}>
      <Card>
        <div style={{flex:1.5}}>
          <Thumbnail src={episode?.image?.original? episode?.image?.original : placeholderImage} />
        </div>
        <div style={{flex: 5}} >
          <h2>{episode.name}</h2>
          <p style={{margin: 0, lineHeight:1.5}} dangerouslySetInnerHTML={summaryObj}/>
        </div>
      </Card>
    </Link>
    
  )
}