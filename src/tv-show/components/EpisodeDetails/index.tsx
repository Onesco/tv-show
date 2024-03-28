import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import { } from "../../../store/tv-show/showSlice";
import placeholderImage from "../../../constants/tv-show/episodeImagePlaceHolder";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%; 
  max-width: 100%; 
  height: auto; 
  object-fit: cover; 
`;

export default function EpisodeDetail() {
  const {episodesData} = useSelector(( state: RootState ) => state.movieShow);
  const { id } = useParams();

  if(episodesData.isLoading) return <p>loading...</p>;
  if(episodesData.error) return <p>ops something went wrong</p>;

  const [ episode ] =  episodesData.episodes.filter((episode)=> episode.id == id);

  const summaryObj = {__html: episode?.summary}; 
  
  return (
    <div>
      <Image src={episode?.image?.original ? episode?.image?.original : placeholderImage} />
      <h1>Episode: {episode?.name}</h1>
      <div style={{margin: 0, lineHeight:1.5}} dangerouslySetInnerHTML={summaryObj}/>
    </div>
  )
}