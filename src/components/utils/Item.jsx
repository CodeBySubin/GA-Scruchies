import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  return (
    <div className="relative flex flex-col items-center bg-white rounded-xl pb-4 transition-all duration-700 ease-in-out w-full hover:scale-105 shadow-md">
      {/* Image Section */}
      <div className="flex justify-center w-full h-60 md:h-72 lg:h-80">
  <img
    src={img}
    alt={`img/item-img/${id}`}
    className="h-full w-full object-cover rounded-t-xl"
  />
</div>


      {/* Details Section */}
      <div className="flex flex-col items-center w-full mt-4">
        <h1 className="text-black text-lg font-medium">{title}</h1>

        <div className="flex items-center justify-center w-full my-2">
            <h1 className="text-black text-sm font-medium">₹ {price}</h1>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center gap-3">
          {/* <button
            type="button"
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
            onClick={onAddToCart}
          >
            <ShoppingBagIcon className="h-5 w-5 text-black" />
          </button> */}
          <button
            type="button"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
          >
            ADD to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
