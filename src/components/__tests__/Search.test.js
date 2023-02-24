import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/RESTAURANT_DATA";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Shimmer should load if data is not loaded on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmerUi = body.getByTestId("shimmer-ui");
  expect(shimmerUi.children.length).toBe(20);

  await waitFor(() => {
    expect(shimmerUi).not.toBeInTheDocument();
  });
});

test("Restaurants should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const restaurants = body.getByTestId("restaurants");
  expect(restaurants.children.length).toBe(15);
});

test("search for string(red) on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");

  fireEvent.change(searchInput, { target: { value: "red" } });
  fireEvent.click(searchBtn);

  const restaurants = body.getByTestId("restaurants");
  expect(restaurants.children.length).toBe(2);
});
