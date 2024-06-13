import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter'



function Hero() {
   
const [mytext] = useTypewriter({
    words: ["a Professional Full Stack Web Developer", "a CyberSecurity Enthusiast"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 70
})
  return (
    <div>
  <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay={1500}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center">
        <h2>I'm <span>Kwasi Otu-Danquah</span></h2> 
        <h4 id='animated-text'>{mytext}<Cursor cursorColor="white"/></h4> 
        
        <a href="" className="btn-get-started">Contact Me</a>
      </div>
    </div>
  </div>
</section>



    </div>
  )

}


export default Hero