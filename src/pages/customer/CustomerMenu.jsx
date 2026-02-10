import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyRestaurant } from "../../data/dummyRestaurant";
import MenuItemCard from "../../components/customer/MenuItemCard";
import { FaShoppingCart } from "react-icons/fa";

const CustomerMenu = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = () => {
    const orderId = Math.floor(Math.random() * 100000);

    navigate(`/customer/order/${orderId}`, {
      state: { cart, total },
    });
  };

  return (
    <div className="p-4 pb-32">
      {/* Restaurant Info */}
      <div className="bg-white shadow p-4 text-center rounded-lg mb-4">
        <h1 className="text-xl font-bold">{dummyRestaurant.name}</h1>
        <p className="text-gray-500 text-sm">Table #{tableId}</p>
      </div>

      {/* Menu */}
      <MenuItemCard products={dummyRestaurant.menu} onAdd={addToCart} />

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <button
          onClick={() => {
            const orderId = Math.floor(Math.random() * 100000);

            navigate(`/customer/order/${orderId}`, {
              state: { cart, total },
            });
          }}
          className="
      fixed bottom-6 right-6
       bg-red-500 text-white
      px-5 py-3
      rounded-full
      shadow-lg
      flex items-center gap-2
      hover:scale-105
      transition
    "
        >
          <FaShoppingCart />
          {totalItems}
        </button>
      )}
    </div>
  );
};

export default CustomerMenu;
