import { IMG_CDN_URL } from "../constants";

const CartItem = ({ name, price, category, handleRemoveItem, item }) => {
  return (
    <li className="flex flex-col">
      <span className="my-2">
        {name} ({category})
      </span>
      <span>₹{price / 100}</span>
      <button
        className="bg-red-400 p-1 w-20"
        onClick={() => handleRemoveItem(item)}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
