const ProductCard = ({ image, name, price, badge, onAdd }) => {
  return (
    <div
      className="relative bg-white rounded-2xl shadow-md hover:shadow-xl
      transition-all duration-300 text-center p-5
      max-w-[220px] mx-auto"
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Food Image (Inside Card) */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-gray-800 font-semibold text-sm md:text-base">
        {name}
      </h3>

      <p className="text-gray-400 text-xs mt-1">Fresh vegetable salad</p>

      <p className="text-green-600 font-bold text-lg mt-2">₹{price}</p>

      {/* Button */}
      <button
        className="mt-3 bg-red-500 hover:bg-red-600 text-white
        text-sm px-5 py-2 rounded-lg transition"
        onClick={onAdd}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
