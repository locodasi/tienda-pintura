import { useCartStore } from "../store/cartStore";


export default function CartPage() {
  const products = useCartStore((s) => s.products);
  const addToCart = useCartStore((s) => s.addToCart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const decreaseFromCart = useCartStore((s) => s.decreaseFromCart);

  const handleWhatsApp = () => {
    const lines = Object.values(products).map(
      ({ product, quantity }) => `${quantity} x *${product.name}*`
    );
    const message = `Buenos días Pinturería Colores, quería consultar el costo de esta compra:\n\n${lines.join(
      "\n"
    )}\n\nMuchas gracias.`;
  
    const encoded = encodeURIComponent(message);
    //DEb emepzar con 54 por ser de argentina
    window.open(`https://wa.me/541144116596?text=${encoded}`, "_blank");
  };

  // products es un objeto con keys = product.id
  const productList = Object.values(products);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras 🛒</h2>

      {productList.length === 0 && (
        <p className="text-gray-500">Tu carrito está vacío 😢</p>
      )}

      {productList.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
        >
          {/* Imagen y nombre */}
          <div className="flex items-center gap-4">
            <img
              src={product.img}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <p className="font-medium">{product.name}</p>
          </div>

          {/* Controles de cantidad */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseFromCart(product.id)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              onClick={() => addToCart(product)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      {productList.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={handleWhatsApp}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold"
          >
            Consultar por WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
