import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Order = () => {
  const { orderId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialOrder =
    state?.cart && state?.total
      ? { cart: state.cart, total: state.total }
      : JSON.parse(localStorage.getItem("currentOrder")) || {
          cart: [],
          total: 0,
        };

  const [cart, setCart] = useState(initialOrder.cart);
  const [total, setTotal] = useState(initialOrder.total);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotal(newTotal);

    localStorage.setItem(
      "currentOrder",
      JSON.stringify({ cart, total: newTotal, orderId }),
    );
  }, [cart]);

  const increaseQty = (id) => {
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const handleCheckout = () => {
    navigate(`/customer/payment/${orderId}`);
  };

  if (cart.length === 0)
    return (
      <p className="text-center mt-20 text-gray-500 font-semibold">
        Cart is empty
      </p>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Your <span className="text-green-500">Cart</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT SIDE - CART ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between"
              >
                {/* Left Section */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-400">
                      Fresh vegetable salad
                    </p>
                  </div>
                </div>

                {/* Price */}
                <p className="font-semibold text-gray-800">₹{item.price}</p>

                {/* Quantity */}
                <div className="flex items-center bg-red-500 text-white rounded-lg">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1"
                  >
                    -
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - CART TOTAL */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Proceed To Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
