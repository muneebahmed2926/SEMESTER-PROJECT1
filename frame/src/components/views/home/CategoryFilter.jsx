import React from 'react'

const CategoryFilter = () => {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-sm">
  <h3 className="text-lg font-semibold text-blue-900 mb-4">Filter By</h3>
  {/* Price Range */}
  <div className="mb-6">
    <h4 className="text-md font-medium text-blue-800 mb-2">Price Range</h4>
    <div className="flex items-center justify-between mb-2">
      <span className="text-blue-700">$0</span>
      <span className="text-blue-700">$500</span>
    </div>
    <input type="range" min={0} max={500} className="w-full accent-blue-600" />
  </div>
  {/* Categories */}
  <div className="mb-6">
    <h4 className="text-md font-medium text-blue-800 mb-2">Categories</h4>
    <ul className="space-y-2">
      <li>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-blue-600 mr-2" />
          <span className="text-blue-700">Electronics</span>
        </label>
      </li>
      <li>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-blue-600 mr-2" />
          <span className="text-blue-700">Clothing</span>
        </label>
      </li>
      <li>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-blue-600 mr-2" />
          <span className="text-blue-700">Home &amp; Garden</span>
        </label>
      </li>
    </ul>
  </div>
  {/* Apply Filters Button */}
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300">
    Apply Filters
  </button>
</div>
    </>
  )
}

export default CategoryFilter