import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Footer from "./Footer.jsx";

describe('Footer', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render copyright", () => {
    act(() => {
      render(
        <Footer name="MyCompany" startYear="1991" currentYear="2022" />,
        container
      );
    });

    expect(
      container.querySelector(".copyright").innerHTML
    ).toEqual("© 1991-2022 MyCompany. All rights reserved.");
  });

});
