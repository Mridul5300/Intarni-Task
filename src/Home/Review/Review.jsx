
import { useEffect, useState } from 'react';
import ReviewData from './ReviewData';
const Review = () => {
     const [reviews, setReviews] = useState([]);
     
     useEffect(() => {
          fetch('Review.json')
               .then(res => res.json())
               .then(data => {
                    setReviews(data)
               });
     }, []);   
     return (
          <div>
               <div className='text-center mt-10'>
                    <h2 className='text-3xl'>Our Clint Review</h2>
               </div>
               <div className='gap-4 mb-3 mt-9 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
               {
                    reviews.map(review => <ReviewData key={review.id} review={review}></ReviewData>)
               }   
          </div>
          </div>
     );
};

export default Review;