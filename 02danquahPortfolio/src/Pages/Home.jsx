import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Home() {
  return (
    <section href="#about" id="about" className="about">
      
  <div className="container" id="margin-top">
  
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-5">
        <img src="/assets/img/02danquah.png" className="img-fluid border-bottom-0" id="border-image" alt style={{paddingRight:"30px"}} />
      </div>
      <div className="col-lg-5 content mt-5">
        <div className="row mt-5">
          <div className="col-lg-12 mt-5">
            <ul>
              <li><strong id="green-name">KWASI OTU-DANQUAH</strong></li>
              <li><i className="bi bi-phone-fill" /> <strong>Phone:</strong> <span>+233 55 187 4252</span></li>
              <li><i className="bi bi-envelope-at-fill" /> <strong>Email:</strong> <span>papa10058@gmail.com</span></li>
              <li><i className="bi bi-building-fill" /> <strong>City:</strong> <span>Accra, Ghana</span></li>
     
            </ul>
          </div>
        </div>
        <p className="py-3">
          <i className="bi bi-info-circle-fill px-1"/>
          
 I am a skilled web developer with extensive experience in building dynamic, high-performance web applications using ReactJS, Node.js, MySQL, and MongoDB. My expertise lies in creating responsive front-end interfaces with ReactJS, ensuring seamless user experiences and efficient state management. On the server side, I leverage Node.js to develop robust back-end systems, utilizing MySQL for structured, relational data and MongoDB for flexible, NoSQL databases.
 </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Home