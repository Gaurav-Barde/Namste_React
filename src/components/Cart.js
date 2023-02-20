import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl">Cart Items</h1>
      <button
        className="p-1 my-2 bg-red-300 rounded-md text-sm"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <ul>
        {items.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              {...item}
              handleRemoveItem={handleRemoveItem}
            />
          );
        })}
      </ul>
      <h1>
        Total:{" "}
        {items
          .map((item) => item.price / 100)
          .reduce((acc, current) => acc + current, 0)}
      </h1>
    </div>
  );
};

export default Cart;
