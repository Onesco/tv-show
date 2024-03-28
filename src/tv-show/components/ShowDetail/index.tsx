import React from "react";
import EpisodeList from "../EpisodeList";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ShowCard from "../ShowCard";

export default function ShowDetail() {
 
  const {episodesData, showData } = useSelector(( state: RootState ) => state.movieShow);

  return (
    <>
     <ShowCard show={showData.show} error={showData.error} isLoading={showData.isLoading}/>
     <h3>List of Episodes</h3>
     <EpisodeList 
      episodes={episodesData.episodes} 
      error={episodesData.error} 
      isLoading={episodesData.isLoading}
    />
    </> 
  )
}
