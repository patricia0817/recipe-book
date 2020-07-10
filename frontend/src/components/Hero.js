import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Axios from 'axios'
import HeroCard from './HeroCard'

function Hero() {
  const [ recipes, setRecipes ] = useState( {} )

  useEffect( () => {
    async function fetchData() {
      const response = await Axios.get( '/recipes' );
      setRecipes( response.data )
    }
    fetchData()
  }, [] )

  const get_random = function( list ) {
    return list[ Math.floor( ( Math.random() * list.length ) ) ];
  }

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
            <HeroCard recipe={ get_random( recipes ) } />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <HeroCard recipe={ get_random( recipes ) } />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <HeroCard recipe={ get_random( recipes ) } />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero