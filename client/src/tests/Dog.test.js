import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Inicio from "../components/Inicio";

test("renders content", () => {
  expect(render(<Inicio />).container).toHaveTextContent("GET START");
});
