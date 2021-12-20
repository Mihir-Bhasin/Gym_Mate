import React from 'react'
import { Carousel} from 'react-bootstrap';

function Slider() {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://api.sourceofsupplements.com/slider/1636631939815__sos_9.9.21(1000x450)mobile.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://api.sourceofsupplements.com/slider/1636631982832__sos_4_Mobile.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval ={2000}>
    <img
      className="d-block w-100"
      src="https://api.sourceofsupplements.com/slider/1636632017984__Evogen_Mobile.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval ={2000}>
    <img
      className="d-block w-100"
      src=" https://api.sourceofsupplements.com/slider/1628453439530__IN2_1900x855.webp"
      alt="Third slide"
    />
  
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}

export default Slider
