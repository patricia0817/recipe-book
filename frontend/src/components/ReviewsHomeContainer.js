import React, { useEffect } from 'react'
import ReviewHomeCard from './ReviewHomeCard'

function ReviewsHomeContainer() {
  return (
    <div className="small-receipe-area section-padding-80-0">
      <div className="container">
        <div className="small-receipe-area-row row">
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
          <ReviewHomeCard />
        </div>
      </div>
    </div>
  )
}

export default ReviewsHomeContainer