import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("online status shoud be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart should have zero items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartItems = header.getByTestId("cart-items");
  expect(cartItems.innerHTML).toBe("Cart - 0 items");
});
