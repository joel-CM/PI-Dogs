import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../App";
import Inicio from "../components/Inicio/Inicio";
import Home from "../components/Home/Home";

configure({ adapter: new Adapter() });

describe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe("Componente Inicio", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Inicio)).toHaveLength(1);
    });
  });

  describe("Componente Home", () => {
    it('Debería renderizarse en la ruta "/home"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/home"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
});
