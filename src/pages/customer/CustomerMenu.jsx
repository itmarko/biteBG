import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyRestaurant } from "../../data/dummyRestaurant";
import MenuItemCard from "../../components/customer/MenuItemCard";
import CustomerPopupForm from "../../components/customer/form/CustomerPopupForm";
import { FaShoppingCart } from "react-icons/fa";

const CustomerMenu = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();

  /* ---------------- CART ---------------- */
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

  /* ---------------- CUSTOMER ---------------- */
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const savedCustomer = localStorage.getItem("customer");

    if (!savedCustomer) {
      setShowCustomerForm(true);
    } else {
      setCustomer(JSON.parse(savedCustomer));
    }
  }, []);

  const handleCustomerSubmit = (data) => {
    localStorage.setItem("customer", JSON.stringify(data));
    setCustomer(data);
  };

  /* ---------------- CHECKOUT ---------------- */
  const handleCheckout = () => {
    if (!customer) {
      setShowCustomerForm(true);
      return;
    }

    const orderId = Math.floor(Math.random() * 100000);

    navigate(`/customer/order/${orderId}`, {
      state: { cart, total, tableId, customer },
    });
  };

  return (
    <div className="p-4 pb-32">
      <div className="bg-white shadow p-4 text-center rounded-lg mb-4">
        <h1 className="text-xl font-bold">{dummyRestaurant.name}</h1>
        <p className="text-gray-500 text-sm">Table #{tableId}</p>
      </div>

      <MenuItemCard products={dummyRestaurant.menu} onAdd={addToCart} />

      {totalItems > 0 && (
        <button
          onClick={handleCheckout}
          className="fixed bottom-6 right-6 bg-red-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <FaShoppingCart />
          {totalItems}
        </button>
      )}

      {showCustomerForm && (
        <CustomerPopupForm
          onClose={() => setShowCustomerForm(false)}
          onSubmit={handleCustomerSubmit}
        />
      )}
    </div>
  );
};

export default CustomerMenu;
