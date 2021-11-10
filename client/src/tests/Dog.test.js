import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow ,mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../App"
import Inicio from "../components/Inicio/Inicio";

configure({ adapter: new Adapter() });

describe("Inicio", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  
  let wrapper;
  beforeEach(() => {
    store = mockStore([]);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
  

  it("Inicio deberia renderizar en la ruta /", () => {
    expect(wrapper.find(Inicio)).toHaveLength(1);
  });

  it("Deberia renderizar un <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it("Debería contener un h1 con un texto 'Henry Dogs'", () => {
    expect(wrapper.find('h1').at(0).text()).toBe("Henry Dogs ")
  });

  it("Link contener el texto 'GET START'", () => {
    expect(wrapper.find(Link).at(0).text()).toEqual("GET START")
  });
})
