import React from 'react'
import { Carousel } from 'react-bootstrap';

import Room1 from '../assets/images/room1.jpg'
import Room2 from '../assets/images/room2.jpg'
import Room3 from '../assets/images/room3.jpg'
import Room4 from '../assets/images/room4.jpg'
import Room5 from '../assets/images/room5.jpg'

const RoomsCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>First slide label</h3> */}
                              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room2}
                              src="https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
                              alt="Second slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Second slide label</h3> */}
                              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room3}
                              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              // src={Room4}
                              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                              alt="Fourth slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              {/* <h3>Third slide label</h3> */}
                              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                  </Carousel.Item>
                  
            </Carousel>


      )
}

export default RoomsCarousel
