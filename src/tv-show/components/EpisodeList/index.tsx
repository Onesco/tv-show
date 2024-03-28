import React from "react"
import EpisodeCard from "../EpisodeCard"
import IShowEpisode from "../../../interface/tv-show/IShowEpisode";

type EpisodesPropTypes = {
  episodes: IShowEpisode[];
  error: string;
  isLoading: boolean;
}
export default function EpisodeList({ episodes, error, isLoading }: EpisodesPropTypes) {

  if( isLoading ) {
    return <div>Loading...</div>
  }
  return (
    <>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <EpisodeCard episode={episode} />
        </li>
      ))}
    </>
  )
}
