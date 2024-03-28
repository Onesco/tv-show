import React from "react"
import EpisodeCard from "../EpisodeCard"
import IShowEpisode from "../../../interface/tv-show/IShowEpisode";
import styled from "@emotion/styled";

type EpisodesPropTypes = {
  episodes: IShowEpisode[];
  error: string;
  isLoading: boolean;
}


const List = styled.ul`
flex-direction: column;
list-style-type: none;
padding: 0;
gap: 3.5rem;
`


export default function EpisodeList({ episodes, error, isLoading }: EpisodesPropTypes) {

  if( isLoading ) {
    return <div>Loading...</div>
  }
  if( error ) {
    return <div>something went wrong</div>
  }
  return (
    <List>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <EpisodeCard episode={episode} />
        </li>
      ))}
    </List>
  )
}
