import { useState } from "react";
import { useParams } from "react-router-dom";
import { dummyRestaurant } from "../../data/dummyRestaurant";
import MenuItemCard from "../../components/customer/MenuItemCard";
import Cart from "../../components/customer/Cart";
// import ProductGrid from "../menu/ProductGrid";

const CustomerMenu = () => {
  const { tableId } = useParams(); // table number from QR code
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

  const removeFromCart = (item) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === item.id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  };

  return (
    <div className="p-4 pb-40">
      {/* Restaurant & Table Info */}
      <div className="bg-white shadow p-4 text-center rounded-lg mb-4">
        <h1 className="text-xl font-bold">{dummyRestaurant.name}</h1>
        <p className="text-gray-500 text-sm">
          Table #{tableId} (scanned via QR code)
        </p>
      </div>

      {/* Menu Items */}
      <div className="">
        <MenuItemCard products={dummyRestaurant.menu} onAdd={addToCart} />
      </div>

      {/* Cart */}
      <Cart
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        tableId={tableId}
      />
      {/* <ProductGrid onAdd={addToCart} /> */}
    </div>
  );
};

export default CustomerMenu;
