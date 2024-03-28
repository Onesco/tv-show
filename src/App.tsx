import React, { useEffect } from "react";
import ShowDetail from "./tv-show/components/ShowDetail";
import { fetchEpisodes, fetchShow } from "./store/tv-show/showSlice";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { Route, Routes } from "react-router-dom";
import EpisodeDetail from "./tv-show/components/EpisodeDetails";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 65rem;
  margin: 0 auto;
  `;

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    const fetchData = async () => {
      const response = await dispatch(fetchShow("Powerpuff Girls"));
      dispatch(fetchEpisodes(response.payload.id));
    }
    fetchData();
  }, []);

  return (
    
    <Container>
      <Routes>
        <Route path="/" element={<ShowDetail/>}/>
        <Route path="/episodes/:id" element={< EpisodeDetail />}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </Container>
  );
}

export default App;
