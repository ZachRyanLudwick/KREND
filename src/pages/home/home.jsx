import React from 'react'
import './home.css'
import './cards.css'

import krendering from '../../assets/cards/K-Render-Specialists.png'
import extplastering from '../../assets/cards/external-plastering.jpg'
import coloredRendering from '../../assets/cards/colored-rendering.jpg'
import internalPlastering from '../../assets/cards/plastering-inside.jpg'

import plasters from '../../assets/plasters.jpg'

const home = () => {
  return (
    <main className="main-wrapper">
      <div className='hero'>
        <section className="home">
          <div className="container">
            <h1>K-Render UK</h1>
            <h2>The UK's Finest In Professional Rendering.</h2>
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
                <img src={krendering} alt="K-Rendering Service" loading="lazy" />
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
                  <p>The benefits of K-Rendering include:</p>
                      <ul>
                          <li>Enhanced aesthetic appeal with a modern, smooth finish</li>
                          <li>Superior weather protection against rain and moisture</li>
                          <li>Improved thermal insulation properties</li>
                          <li>Crack-resistant and low maintenance</li>
                          <li>Available in a wide range of colors and textures</li>
                          <li>Increases property value and curb appeal</li>
                          <li>Environmental friendly and sustainable solution</li>
                      </ul>
                </div>
                <label className="read-more-button" htmlFor="read-more-1"></label>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={extplastering} alt="External Plastering Service" loading="lazy" />
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
                    <ul>
                          <li>Enhanced aesthetic appeal with a modern, smooth finish</li>
                          <li>Protection against weather elements like rain and wind</li>
                          <li>Increased durability and strength of exterior walls</li>
                          <li>Crack-resistant and low maintenance</li>
                          <li>Increased property value with a well-maintained exterior</li>
                          <li>Added fire resistance to the building structure</li>
                          <li>Environmental friendly and sustainable solution</li>
                      </ul>
                  </p>
                </div>
                <label className="read-more-button" htmlFor="read-more-2"></label>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={coloredRendering} alt="Colored Rendering Service" loading="lazy" />
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
                  <ul>
                    <li>Provides a wide range of color options for a personalized, aesthetic look</li>
                    <li>Reduces the need for frequent painting, as the color is embedded in the render</li>
                    <li>Adds an extra layer of protection against the elements</li>
                    <li>Helps with UV resistance, preventing fading over time</li>
                    <li>Enhances the durability of the exterior surface</li>
                  </ul>
                </div>
                <label className="read-more-button" htmlFor="read-more-3"></label>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={internalPlastering} alt="Interior Plastering Service" loading="lazy" />
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
                  <ul>
                    <li>Creates a smooth, even surface for painting or other finishes</li>
                    <li>Improves the overall aesthetic and appeal of interior spaces</li>
                    <li>Easy to repair if damaged, maintaining a clean look over time</li>
                    <li>Helps regulate indoor humidity and reduces the risk of mold growth</li>
                    <li>Improves indoor air quality by reducing dust and allergens trapped in porous surfaces</li>
                  </ul>
                </div>
                <label className="read-more-button" htmlFor="read-more-4"></label>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
    
  )
}

export default home