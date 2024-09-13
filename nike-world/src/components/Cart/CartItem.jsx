import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../app/CartSlice.js";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-3 gap-4 md:gap-6 lg:gap-8">
        {/* Product Image & Title/Description */}
        <div className="flex items-center gap-4">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded-lg p-3 transition-transform transform hover:scale-105`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-24 h-auto object-fill md:w-28 lg:w-32"
            />
            <div className="absolute top-1 right-1 bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-base md:text-lg lg:text-sm text-slate-900">
              {title}
            </h1>
            <p className="text-xs md:text-sm lg:text-xs text-slate-600">
              {text}
            </p>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onDecreaseItemQTY}
            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
          >
            <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
          </button>

          <div className="bg-theme-cart rounded text-white font-medium text-sm w-8 h-6 flex items-center justify-center">
            {cartQuantity}
          </div>

          <button
            type="button"
            onClick={onIncreaseItemQTY}
            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
          >
            <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
          </button>
        </div>

        {/* Total Price & Remove Button */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-sm md:text-base lg:text-lg font-medium text-slate-900">
            ${price * cartQuantity}
          </h1>
          <button
            type="button"
            onClick={onRemoveItem}
            className="bg-theme-cart rounded p-2 lg:p-1 flex items-center justify-center active:scale-95"
          >
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
