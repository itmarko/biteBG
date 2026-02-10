import { useNavigate } from "react-router-dom";

const Cart = ({ cart, onAdd, onRemove }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return null;

  const handlePlaceOrder = () => {
    const orderId = Math.floor(Math.random() * 100000); // dummy orderId
    navigate(`/customer/order/${orderId}`, { state: { cart, total } });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t p-4 z-50 max-h-[70vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-3 text-center">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-between"
          >
            {/* Left Image */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-400">Fresh vegetable salad</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm">₹{item.price}</span>

              <div className="flex items-center bg-red-500 text-white rounded-lg overflow-hidden">
                <button onClick={() => onRemove(item)} className="px-2 py-1">
                  −
                </button>

                <span className="px-3">{item.qty}</span>

                <button onClick={() => onAdd(item)} className="px-2 py-1">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="bg-white rounded-xl shadow-sm mt-4 p-4">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;
