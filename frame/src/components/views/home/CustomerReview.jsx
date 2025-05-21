import React from 'react'

const CustomerReview = () => {
  return (
    <>
   <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-blue-100 my-8">
  <h3 className="text-xl font-semibold text-blue-900 mb-4">Customer Reviews</h3>
  {/* Average Rating */}
  <div className="flex items-center mb-6">
    <div className="text-3xl font-bold text-blue-900 mr-4">4.8</div>
    <div className="mr-4">
      <div className="flex text-yellow-400 mb-1">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <p className="text-blue-700 text-sm">Based on 124 reviews</p>
    </div>
    <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition duration-300">
      Write a Review
    </button>
  </div>
  {/* Review Item */}
  <div className="border-t border-blue-200 pt-4 pb-6">
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold mr-3">JD</div>
      <div>
        <h4 className="font-medium text-blue-900">John D.</h4>
        <div className="flex text-yellow-400 text-sm">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      </div>
      <span className="text-blue-700 text-sm ml-auto">2 days ago</span>
    </div>
    <h5 className="font-medium text-blue-900 mb-1">Excellent product!</h5>
    <p className="text-blue-700">This exceeded my expectations. The quality is amazing and it arrived sooner than expected. Will definitely purchase again!</p>
  </div>
  {/* See All Reviews */}
  <div className="text-center">
    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">See all reviews →</a>
  </div>
</div>

    
    </>
  )
}

export default CustomerReview