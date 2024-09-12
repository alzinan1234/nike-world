import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = () => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer">
            <ChevronDoubleLeftIcon className=" w-5 h-5 text-slate-900 hover:text-orange-800" />
          </div>
          <div className="grid items-center">
            <h1 className=" text-base font-semibold text-slate-950">
              Your Cart{" "}
              <span className="bg-theme-cart px-1 py-0.5 text-white rounded">
                (Items)
              </span>
            </h1>
          </div>
        </div>
        <div>
          <button type="button" className="">
            <XMarkIcon className=" w-5 h-5 bg-black text-white cursor-pointer stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
