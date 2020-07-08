import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import HeroCard from './HeroCard'

function Hero( props ) {
  return (
    <div className="px-3">
      <Carousel className="hero-container h-100">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption>
            <HeroCard />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <HeroCard />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <HeroCard />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero