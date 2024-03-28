import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    Route: jest.fn(),
    Routes: jest.fn(),
  };
});

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn().mockReturnValue(jest.fn())
}));

jest.mock("./store/tv-show/showSlice", ()=> {
 return {
  __esModule: true,
  fetchEpisodes: jest.fn(),
  fetchShow: jest.fn(),
 }
});


test("renders learn react link", () => {
  const {container} = render(<App />);
  expect(container).toBeInTheDocument();
});
