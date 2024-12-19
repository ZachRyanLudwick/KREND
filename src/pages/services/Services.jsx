import React from 'react'
import './Services.css'

import krend from '../../assets/cards/K-Render-Specialists.png'
import external from '../../assets/cards/external-plastering.jpg'
import colored from '../../assets/cards/colored-rendering.jpg'
import internal from '../../assets/cards/plastering-inside.jpg'

const Services = () => {
  return (
    <main className="main-wrapper">
        <div className="service-hero">
            <section className="sb-content">
                <div className="sb">
                    <h1>K-Rendering</h1>
                    <p>
                        K-Rendering is the ultimate solution for transforming and protecting your property’s exterior like never before. Designed to outperform traditional rendering methods, K-Rendering combines advanced technology with premium materials to deliver a flawless finish that lasts. Not only does it enhance the appearance of your building with a wide range of textures and colors, but it also offers unbeatable durability, weather resistance, and thermal insulation. Unlike other rendering options, K-Rendering is specially formulated to prevent cracks, reduce maintenance, and keep your property looking pristine for years to come. When it comes to quality, performance, and style, nothing beats K-Rendering. Elevate your exterior today and invest in the best.
                    </p>
                </div>
                <div className="sb-image">
                    <img src={krend} alt=""/>
                </div>
            </section>
            <section className="sb-content">
                <div className="sb">
                    <h1>External Plastering</h1>
                    <p>
                        External rendering is the perfect solution to transform and protect your property’s exterior. By applying a high-quality render to the outer walls, you not only give your building a sleek, modern look but also provide a durable shield against harsh weather conditions. Whether you're looking to refresh your home's appearance or add value to your property, external rendering offers superior protection from rain, wind, and UV damage while improving energy efficiency. With a range of finishes and colors to choose from, we can create a custom look tailored to your style. Upgrade your exterior today with our expert rendering services, combining functionality and aesthetics for a result that lasts for years.
                    </p>
                </div>
                <div className="sb-image">
                    <img src={external} alt=""/>
                </div>
            </section>
            <section className="sb-content">
                <div className="sb">
                    <h1>Colored Rendering</h1>
                    <p>
                    Colored rendering is the ultimate way to elevate your property’s exterior with stunning, long-lasting style and protection. Unlike traditional rendering, colored rendering integrates vibrant pigments directly into the render, ensuring a rich, even finish that won’t fade or peel over time. With a vast selection of colors and finishes, you can create a custom look that perfectly complements your property. Not only does it provide a flawless aesthetic, but colored rendering also offers exceptional durability, weather resistance, and insulation. Say goodbye to repainting and maintenance—this all-in-one solution keeps your exterior looking fresh and beautiful for years. Choose colored rendering for a bold, modern finish that stands out while safeguarding your property.    
                    </p>
                </div>
                <div className="sb-image">
                    <img src={colored} alt=""/>
                </div>
            </section>
            <section className="sb-content">
                <div className="sb">
                    <h1>Interior Plastering</h1>
                    <p>
                    Interior plastering is the ultimate way to achieve flawless, smooth walls and ceilings that provide the perfect foundation for any decor. Our premium plastering services are designed to create a seamless finish, transforming uneven surfaces into pristine canvases ready for paint, wallpaper, or other finishes. Beyond aesthetics, interior plastering enhances your space by improving durability, soundproofing, and thermal insulation. Whether you’re renovating, building new, or repairing, our expert plastering ensures long-lasting quality and a professional look. Invest in interior plastering today for a polished, durable finish that elevates the comfort and style of your home or workspace.
                    </p>
                </div>
                <div className="sb-image">
                    <img src={internal} alt=""/>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Services
