import ProductCard from "./ProductCard";

const MenuItemCard = ({ products, onAdd }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={() => onAdd(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItemCard;
