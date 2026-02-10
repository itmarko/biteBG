import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Vegetable Salad",
    price: "₹15.69",
    badge: "NEW",
    image: "https://picsum.photos/300/300?1",
  },
  {
    id: 2,
    name: "Sliced Pineapple",
    price: "₹9.69",
    badge: "SALE",
    image: "https://picsum.photos/300/300?2",
  },
  {
    id: 3,
    name: "Egg Bowl",
    price: "₹18.50",
    image: "https://picsum.photos/300/300?3",
  },
  {
    id: 4,
    name: "Cooked Seafoods",
    price: "₹20.50",
    badge: "HOT",
    image: "https://picsum.photos/300/300?4",
  },
  {
    id: 5,
    name: "Vegetable Salad",
    price: "₹15.69",
    image: "https://picsum.photos/300/300?5",
  },
  {
    id: 6,
    name: "Sliced Pineapple",
    price: "₹9.69",
    badge: "NEW",
    image: "https://picsum.photos/300/300?6",
  },
  {
    id: 7,
    name: "Egg Bowl",
    price: "₹18.50",
    image: "https://picsum.photos/300/300?7",
  },
  {
    id: 8,
    name: "Cooked Seafoods",
    price: "₹20.50",
    badge: "HOT",
    image: "https://picsum.photos/300/300?8",
  },
];

const ProductGrid = ({ onAdd }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div
        className="
        max-w-7xl mx-auto
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
        gap-4
      "
      >
        {/* {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={() => onAdd(product)}
          />
        ))} */}
      </div>
    </div>
  );
};

export default ProductGrid;
