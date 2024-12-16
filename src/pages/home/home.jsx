import React from 'react'
import './home.css'
import './cards.css'

import plasters from '../../assets/plasters.jpg'

const home = () => {
  return (
    <div className='hero'>
      <section className="home">
        <div className="container">
          <h1>K-Render UK</h1>
          <h2>The UK's Finest In Profressional Rendering.</h2>
        </div>
      </section>

      <div className="seperation-line"/>

      <div className="info">
        <section className="content-section">
          <div className="text-content">
            <h2>What we have to offer</h2>
            <p>We offer a comprehensive range of plastering services
               designed to enhance both the interior and exterior 
               of your home. While we excel in all aspects of plastering,
               we specialise in K-rendering—the premium solution for creating flawless,
               durable exteriors. Our K-render service provides your home with a sleek,
                contemporary finish while offering long-lasting protection against the elements. 
                Whether you're looking to refresh the appearance of your property or improve its 
                insulation, our experienced team delivers top-notch results with every project. 
                Let us transform the exterior of your home with our expert K-rendering services.</p>
          </div>
          <div className="image-content">
            <img src={plasters} alt="Description of image" className="rounded-image"/>
          </div>
        </section>
      </div>

      <div className="seperation-line"/>

      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-krender-image.jpg" alt="K-Rendering Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>K-Rendering</h3>
              <p className="service-preview">
                Professional K-rendering services providing superior exterior wall finishes. 
                Our advanced techniques ensure maximum durability and weather resistance while 
                maintaining aesthetic appeal.
              </p>
              <input type="checkbox" id="read-more-1" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  We specialize in both thin-coat and thick-coat K-rend applications, 
                  offering various textures and colors to match your property's style.
                  The benefits of K-Rendering are 
                </p>
                <ul>
                    <li>Enhanced aesthetic appeal</li>
                    <li>Improved insulation protection</li>
                    <li>Long-lasting durability</li>
                  </ul>
              </div>
              <label className="read-more-button" htmlFor="read-more-1"></label>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-external-plastering.jpg" alt="External Plastering Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>External Plastering</h3>
              <p className="service-preview">
                High-quality external plastering solutions for residential and commercial properties. 
                We deliver smooth, durable finishes that protect and enhance your building's exterior.
              </p>
              <input type="checkbox" id="read-more-2" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  Our external plastering services include scratch coat application, 
                  finishing coats, and decorative textures. We use premium materials 
                  and proven techniques to ensure weather resistance and longevity.
                </p>
              </div>
              <label className="read-more-button" htmlFor="read-more-2"></label>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-colored-rendering.jpg" alt="Colored Rendering Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>Colored Rendering</h3>
              <p className="service-preview">
                Custom colored rendering solutions to transform your property's appearance. 
                Choose from a wide range of colors and finishes to achieve your desired look.
              </p>
              <input type="checkbox" id="read-more-3" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  Our colored rendering service combines aesthetic appeal with durability. 
                  We offer color matching, sample testing, and expert application to ensure 
                  perfect results that last for years.
                </p>
              </div>
              <label className="read-more-button" htmlFor="read-more-3"></label>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-interior-plastering.jpg" alt="Interior Plastering Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>Interior Plastering</h3>
              <p className="service-preview">
                Expert interior plastering services for walls and ceilings. We create 
                perfectly smooth surfaces ready for decoration in any residential or commercial space.
              </p>
              <input type="checkbox" id="read-more-4" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  From skimming and patching to complete room renovations, our interior 
                  plastering service delivers flawless results. We specialize in both 
                  traditional and modern plastering techniques.
                </p>
              </div>
              <label className="read-more-button" htmlFor="read-more-4"></label>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-commercial-rendering.jpg" alt="Commercial Rendering Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>Commercial Rendering</h3>
              <p className="service-preview">
                Large-scale rendering solutions for commercial properties. Our team handles 
                projects of any size with professional efficiency and attention to detail.
              </p>
              <input type="checkbox" id="read-more-5" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  We provide comprehensive commercial rendering services, including project 
                  planning, execution, and maintenance. Our experience includes office buildings, 
                  retail spaces, and industrial facilities.
                </p>
              </div>
              <label className="read-more-button" htmlFor="read-more-5"></label>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/path-to-maintenance.jpg" alt="Maintenance & Repair Service" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>Maintenance & Repair</h3>
              <p className="service-preview">
                Professional maintenance and repair services for rendered surfaces. Keep your 
                property looking its best with our expert maintenance solutions.
              </p>
              <input type="checkbox" id="read-more-6" className="read-more-toggle" hidden />
              <div className="read-more-content">
                <p>
                  Our maintenance services include crack repair, patch matching, cleaning, 
                  and protective coating applications. Regular maintenance extends the life 
                  of your rendered surfaces and maintains their appearance.
                </p>
              </div>
              <label className="read-more-button" htmlFor="read-more-6"></label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default home
