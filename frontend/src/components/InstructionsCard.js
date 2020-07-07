import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

function InstructionsCard() {
  return (
    <Card className="instructions-card-container col-xs-12 col-lg-7">
      <Card.Body>
        <Card.Title className="instructions-card-title text-success">Instructions</Card.Title>
        <Card.Text>
          <Card.Img variant="top" src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quo. Iste dolorem cum veritatis, harum consequuntur dolorum labore neque quas delectus repudiandae nulla beatae. Illum asperiores velit tenetur ipsa itaque.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quo. Iste dolorem cum veritatis, harum consequuntur dolorum labore neque quas delectus repudiandae nulla beatae. Illum asperiores velit tenetur ipsa itaque.
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default InstructionsCard