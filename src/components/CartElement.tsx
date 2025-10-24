import { useCartStore } from "../store/cartStore";
import CartIcon from "../icons/CartIcon";

export default function CartElement() {
  const totalCount = useCartStore((s) =>
    Object.values(s.products).reduce((acc, i) => acc + i.quantity, 0)
  );

  const goToCart = () => {
    window.location.href = "/cart";
  };

  return (
    <div className="relative inline-block cursor-pointer" onClick={goToCart}>
      <CartIcon />

      {totalCount > 0 && (
        <span
          className="
            absolute bottom-0 right-0 
            bg-red-500 text-white text-xs 
            font-bold rounded-full 
            w-4 h-4 flex items-center justify-center
            translate-x-1 translate-y-1
          "
        >
          {totalCount}
        </span>
      )}
    </div>
  );
}
