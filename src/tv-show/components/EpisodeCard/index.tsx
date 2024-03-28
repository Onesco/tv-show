import React from "react";
import styled from "@emotion/styled";
import IShowEpisode from "../../../interface/tv-show/IShowEpisode";
import { Link } from "react-router-dom";
import placeholderImage from "../../../constants/tv-show/episodeImagePlaceHolder";


type EpisodeCardPropTypes = {
    episode: IShowEpisode;
}

const Thumbnail = styled.img`
`;


export default function EpisodeCard({ episode }: EpisodeCardPropTypes) {

  const summaryObj = {__html: episode.summary};  
  return (
    <div style={{display: "flex"}}>
      <Thumbnail src={episode.image?.medium ? episode.image?.medium : placeholderImage} />
      <Link to={`/episodes/${episode.id}`}>
        <h3>{episode.name}</h3>
        <div style={{margin: 0, lineHeight:1.5}} dangerouslySetInnerHTML={summaryObj}/>
      </Link>
    </div>
  )
}