import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  id,
  color,
  shadow,
  title,
  text,
  img,
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
    <div className="relative flex flex-col items-center bg-white rounded-xl pb-4 transition-all duration-700 ease-in-out w-full hover:scale-105">
      {/* Image Section */}
      <div className="flex justify-center w-full h-60 md:h-48 lg:h-80">
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className="h-full w-full object-cover rounded-t-xl"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col items-center w-full mt-4 px-4">
        <h1 className="text-black text-lg font-medium w-full text-center">{title}</h1>

        <div className="flex items-center justify-center w-full my-2">
          <h1 className="text-black text-sm font-medium">₹ {price}</h1>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center w-full">
          <button
            type="button"
            className="bg-white text-black w-full py-2 rounded-lg text-sm border border-black"
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
