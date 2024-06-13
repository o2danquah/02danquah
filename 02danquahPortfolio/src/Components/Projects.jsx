import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

function Projects() {
  return (
    
      <div className='cards pt-5'>
        <div className='row justify-content-center'>
   <h1 className='' id='projects' href='#projects' style={{textAlign: 'center'}}>Projects</h1>
   </div>
         <div className='container'>
         <div className='row gy-4 justify-content-center'>
              <div className='col-lg-6 mb-3'>
                <div className='project-cards'>
                <a href='https://informaticsconsult.com/'>
                <img src="/assets/img/Informatics.png" className="img-fluid border-bottom-0"/>
              <i className='bi bi-link icon-100'></i>
                </a>
                </div>
             
              
              </div>
              <div className=' col-lg-6 mb-3'>
                <div className='project-cards'>
                <img src="assets/img/Dzidi.png" className="img-fluid border-bottom-0" id="border-image" alt/>
                <i className='bi bi-link icon-100'></i>
              </div>
                </div>
              
              <div className=' col-lg-6 mb-3'>
                <div className='project-cards'>
                <img src="/assets/img/RevCore.png" className="img-fluid border-bottom-0" id="border-image" alt/>
                <i className='bi bi-link icon-100'></i>
              </div>
                </div>
              
              <div className=' col-lg-6 mb-3'>
                <div className='project-cards'>
                <img src="/assets/img/Stocks.png" className="img-fluid border-bottom-0" id="border-image" />
                <i className='bi bi-link icon-100'></i>
                </div>
             
              </div>
         </div>
         </div>
    </div>
  )
}

export default Projects