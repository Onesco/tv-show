import React from "react";
import { render} from "@testing-library/react";
import EpisodeCard from "./index";
import IShowEpisode from "../../../interface/tv-show/IShowEpisode";


jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom");
  
    return {
      __esModule: true,
      ...originalModule,
      Link: jest.fn(),
    };
  });

const episode: IShowEpisode = {
    id: "1",
    name: "testing episode",
    image: {
        original: "https://image.tmdb.org/t/p/w500/123456789",
        medium: "medium"
    },
    summary: "This is a testing summary"
};

test("renders learn react link", () => {
  const { container } =  render(<EpisodeCard episode={episode} />);
  expect(container).toBeInTheDocument();
});