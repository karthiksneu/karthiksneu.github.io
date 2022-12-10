import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Navbar/nav.css'


const Nav1 = () => {
      return (
            <Navbar className="py-1 justify-content-center nav_bar" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/rooms'>Stay</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/restaurants'>DineIn</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/foods'>Delivery</a>
                        </li>

                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/weddings'>Halls</a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav1
