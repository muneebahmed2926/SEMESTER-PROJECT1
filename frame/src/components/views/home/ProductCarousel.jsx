import React from 'react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 89.99,
      description: 'Great sound, comfortable fit.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      stock: true,
    },
    {
      id: 2,
      name: 'Office Chair',
      price: 129.99,
      description: 'Ergonomic design for comfort.',
      image: 'https://images.unsplash.com/photo-1562569639-78cc5180e567?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: true,
    },
    {
      id: 3,
      name: 'Fitness Tracker',
      price: 69.99,
      description: 'Tracks your activity and sleep.',
      image: 'https://images.unsplash.com/photo-1532635124-547e9894b6aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: false,
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 49.99,
      description: 'Portable, great sound.',
      image: 'https://images.unsplash.com/photo-1543506599-c9b015841494?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: true
    },
    {
      id: 5,
      name: 'Smart TV',
      price: 799.99,
      description: 'High-definition, smart features.',
      image: 'https://images.unsplash.com/photo-1571093472643-4721a987821c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: true
    },
    {
        id: 6,
        name: 'Coffee Maker',
        price: 75.00,
        description: 'Makes great coffee.',
        image: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: true
    },
    {
      id: 7,
      name: 'Laptop',
      price: 999.00,
      description: 'Powerful, for work and play.',
      image: 'https://images.unsplash.com/photo-1496181131884-630a4925a793?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: true
    },
    {
      id: 8,
      name: 'Smartwatch',
      price: 199.00,
      description: 'Stay connected on the go.',
      image: 'https://images.unsplash.com/photo-1591952538996-015e65184593?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: true
    }
  ];



  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Product Image */}
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            {product.stock && (
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                NEW
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Product Info */}
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <span className="text-blue-700 font-bold text-lg">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            {/* Add to Cart */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center font-medium shadow-md hover:shadow-lg"
              disabled={!product.stock}
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              {product.stock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            {/* Quick Actions */}
            <div className="flex justify-between mt-3 text-sm">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="far fa-heart mr-1" /> Wishlist
              </button>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-exchange-alt mr-1" /> Compare
              </button>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="far fa-eye mr-1" /> Quick View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
