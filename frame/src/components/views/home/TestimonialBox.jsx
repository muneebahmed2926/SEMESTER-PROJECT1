import React from 'react';

const TestimonialBox = ({ 
  author, 
  rating, 
  date, 
  title, 
  content, 
  avatarInitials 
}) => {
  return (
    <div className="border-t border-blue-200 pt-4 pb-6">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold mr-3">
          {avatarInitials}
        </div>
        <div>
          <h4 className="font-medium text-blue-900">{author}</h4>
          <div className="flex text-yellow-400 text-sm">
            {/* {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))} */}
          </div>
        </div>
        <span className="text-blue-700 text-sm ml-auto">{date}</span>
      </div>
      <h5 className="font-medium text-blue-900 mb-1">{title}</h5>
      <p className="text-blue-700">{content}</p>
    </div>
  );
};

export default TestimonialBox;