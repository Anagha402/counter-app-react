import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
export default function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid className='bg-primary'>
          <MDBNavbarBrand href='#'className='text-dark fw-bolder fs-3 bg-primary'>
            <img
              src='https://cdn.dribbble.com/users/221753/screenshots/1214929/dribbl_counter.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
  )
}
