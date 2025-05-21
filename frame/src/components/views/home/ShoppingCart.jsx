import React from 'react'

const ShoppingCart = () => {
  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
  <h3 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h3>
  {/* Cart Items */}
  <div className="space-y-4 mb-6">
    <div className="flex justify-between">
      <span className="text-blue-700">Subtotal (3 items)</span>
      <span className="text-blue-900 font-medium">$247.97</span>
    </div>
    <div className="flex justify-between">
      <span className="text-blue-700">Shipping</span>
      <span className="text-blue-900 font-medium">$5.99</span>
    </div>
    <div className="flex justify-between">
      <span className="text-blue-700">Tax</span>
      <span className="text-blue-900 font-medium">$19.84</span>
    </div>
  </div>
  {/* Total */}
  <div className="border-t border-blue-200 pt-4 mb-6">
    <div className="flex justify-between">
      <span className="text-lg font-semibold text-blue-900">Total</span>
      <span className="text-lg font-bold text-blue-900">$273.80</span>
    </div>
  </div>
  {/* Checkout Button */}
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-300 font-medium">
    Proceed to Checkout
  </button>
  {/* Continue Shopping */}
  <div className="mt-4 text-center">
    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Continue Shopping</a>
  </div>
</div>
    
    </>
  )
}

export default ShoppingCart