import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { RESTAURANT_MENU_DATA } from "../../mocks/RESTAURANT_MENU_DATA";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_MENU_DATA),
  });
});

test("Items should added to cart on Restaurant Menu", async () => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
        <Header />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(restaurantMenu.getByTestId("menu")));
  const addToCartBtn = restaurantMenu.getAllByTestId("add-to-cart-btn");
  fireEvent.click(addToCartBtn[0]);

  const cartItems = restaurantMenu.getByTestId("cart-items");

  expect(cartItems.innerHTML).toBe("Cart - 1 items");
});
