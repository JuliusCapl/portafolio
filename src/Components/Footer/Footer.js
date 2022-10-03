import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer--'>
        <div className='container container--'>
        <div>
            <h3>Julio Capdevilla</h3>
            <h4>Based in Melbourne Australia</h4>
        </div>
        <div>
            <h4>do not hesitate contacting me</h4>
        </div>
        <div>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
        </div>
        </div>
    </footer>
  )
}

export default Footer