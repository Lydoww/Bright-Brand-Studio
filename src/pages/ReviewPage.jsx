import React from 'react';
import ReviewCarousel from '../components/review/ReviewCarousel';

const ReviewPage = () => {
  return (
    <div>
      <h1
        id='review-title'
        className='text-center pt-12  text-4xl! md:text-6xl! lg:text-7xl!'
      >
        TESTIMONIALS
      </h1>
      <ReviewCarousel />
    </div>
  );
};

export default ReviewPage;
